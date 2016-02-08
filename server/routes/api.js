var express = require('express');
var router = express.Router();

var basicAuth = require('basic-auth');

var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  }

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  }

  router.db.users({username: user.name, password: user.pass})
    .then((data) => {
      if(data.length === 1){
        auth.user = {
          id: data[0]._id,
          username: data[0].username,
          role: data[0].role,
          password: data[0].password
        };
        return next();
      }
      return unauthorized(res);
    });
};

var auth_role = function(req, res, next){
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  }

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  }

  router.db.users({username: user.name, password: user.pass})
    .then((data) => {
      if(data.length === 1 && data[0].role === 1){
        auth_role.user = {
          id: data[0]._id,
          username: data[0].username,
          role: data[0].role
        };
        return next();
      }
      return unauthorized(res);
    });
};


router.db = null;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', auth, function(req, res) {
  res.json(auth.user);
});

router.get('/items', auth, function(req, res){
  router.db.items()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.status(500).json(fail(error, 500));
    });
});

router.post('/items', auth, function(req, res){
  var body = req.body;
  body.created_by = auth.user.id;
  body.created_at = Date.now();
  router.db.addItem(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.status(500).json(fail(error, 500));
    });
});

router.get('/users/:id/items', auth, function(req, res){
  router.db.items({ created_by: req.params.id })
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(fail(error, 200));
    });
});

router.get('/users/:user/items/:id', auth, function(req, res){
  router.db.items({ _id: req.params.id, created_by: req.params.user })
    .then(data => {
      if(data.length === 1)
        res.json(data[0]);
      else
        res.status(404).json(fail('No content', 404));
    })
    .catch(error => {
      res.status(500).json(fail(error, 500));
    });
});

router.post('/users/:id/items', auth, function(req, res){
  var body = req.body;
  body.created_by = req.params.id;
  body.created_at = Date.now();
  router.db.addItem(body)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(fail(error, 200));
    });
});

router.put('/users/:user/items/:id', auth, function(req, res){
  var body = req.body;
  body._id = req.params.id;
  router.db.updateItem(body)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.status(500).json(fail(error, 500));
    });
});

router.put('/items/:id', auth_role, function(req, res){
  var body = req.body;
  body._id = req.params.id;
  body.updated_by = auth_role.user.id;
  update(body, res);
});

router.post('/items/:id/approve', auth_role, function(req, res){
  var body = req.body;
  body._id = req.params.id;
  body.updated_by = auth_role.user.id;
  body.approved_at = Date.now();
  body.state = 2;
  update(body, res);
});

router.post('/items/:id/produce', auth_role, function(req, res){
  var body = req.body;
  body._id = req.params.id;
  body.updated_by = auth_role.user.id;
  body.produced_at = Date.now();
  body.state = 3;
  update(body, res);
});

router.post('/items/:id/reject', auth_role, function(req, res){
  var body = req.body;
  body._id = req.params.id;
  body.updated_by = auth_role.user.id;
  body.rejected_at = Date.now();
  body.state = 4;
  update(body, res);
});

router.post('/items/:id/delete', auth, function(req, res){
  var body = req.body;
  body._id = req.params.id;
  body.updated_by = auth.user.id;
  body.deleted_at = Date.now();
  body.state = 5;
  update(body, res);
});

function update(body, res){
  router.db.updateItem(body)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.status(500).json(fail(error, 500));
    });
}

function fail(message, code){
  return { error: {
    message: message,
    code: code
  }};
}

module.exports = router;
