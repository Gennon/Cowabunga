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
    });
    
    database.run('CREATE TABLE IF NOT EXISTS items(' +
      '_id INTEGER PRIMARY KEY AUTOINCREMENT, ' + 
      'title TEXT, ' +
      'created_by INTEGER, ' +
      'updated_by INTEGER, ' +
      'state INTEGER, ' +
      'created_at DATETIME, ' +
      'approved_at DATETIME, ' +
      'produced_at DATETIME, ' +
      'rejected_at DATETIME, ' +
      'deleted_at DATETIME)',
      error => {
        if(error) reject(error);
      });
    
    fulfill(db);
  });
}

function users(where){
  return get('users', where);
}

function items(where){
  return get('items', where);
}

function item(id){
  return get('items', {_id: id})
  .then(data => {
    return data[0];
  });
}

function get(table, where){
  return new Promise(function(fulfill, reject){
    testDB(reject);
    var select = {
      table: table
    };
    if (typeof(where) !=='undefined'){
      select.where = where;
    }
    
    db.select(select, function(error, result) {
      if (error) reject(new Error(error));
      return fulfill(result || []);
    });
  });
}

function addUser(user){
  return add('users', user);
}

function addItem(item){
  return add('items', item);
}

function add(table, object){
  return new Promise(function(fulfill, reject){
    testDB(reject);
    
    db.insert(table, object, function(error, id) {
      if(id > 0){
        var addedObject = item(id);
        return fulfill(addedObject);
      }
      return reject(new Error(error));
    });
  });
}

function updateItem(object){
  return update('items', object);
}

function update(table, object){
  return new Promise(function(fulfill, reject){
    testDB(reject);
    var where = {_id : object._id };
    db.update(table, where, object, function(error, changes) {
      if(changes > 0){
        var updatedObject = item(object._id);
        return fulfill(updatedObject);
      } 
      return reject(new Error(error));
    });
  });
}


function testDB(reject){
  if(!db || !database) return reject(new Error('No database'));
}

module.exports = {
  init: init,
  users: users,
  addUser: addUser,
  items: items,
  addItem: addItem,
  updateItem: updateItem,
  close: db.close
};
