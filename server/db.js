var db = require('sqlite3-wrapper');
var Promise = require('promise');

var database = null;

function init(db_file){
  return new Promise(function(fulfill, reject){
    if (typeof(db_file) === 'undefined') db_file = ':memory:';
    db.open(db_file);
    database = db.database();
  
    database.run('CREATE TABLE IF NOT EXISTS users(' +
      '_id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      'username TEXT, ' + 
      'password TEXT, ' +
      'role INTEGER DEFAULT 0)', 
    (error) => {
      if(error) reject(error);
      else fulfill(db);
    });
  });
}

function users(where){
  return new Promise(function(fulfill, reject){
    if(!database) return reject([]);
    var select = {
      table: 'users'
    };
    if (typeof(where) !=='undefined'){
      select.where = where;
    }
    
    db.select(select, function(err, users) {
      if (err) reject([]);
      return fulfill(users || []);
    });
  });
}

function addUser(user){
  return new Promise(function(fulfill, reject){
    if(!db) return reject({});
    
    db.insert('users', user, function(error, id) {
      if(id > 0){
        user.id = id;
        return fulfill(user);
      }
      return reject({});
    });
  });
}


module.exports = {
  init: init,
  users: users,
  addUser: addUser,
  close: db.close
};
