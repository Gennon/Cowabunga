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

module.exports = router;
