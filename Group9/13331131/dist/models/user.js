// Generated by LiveScript 1.3.1
(function(){
  var db, Schema, UserSchema;
  db = require('./db');
  Schema = db.mongoose.Schema;
  UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    identity: Number
  });
  module.exports = db.mongoose.model('User', UserSchema);
}).call(this);
