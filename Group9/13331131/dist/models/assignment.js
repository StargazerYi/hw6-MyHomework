// Generated by LiveScript 1.3.1
(function(){
  var db, User, Md, Schema, AssignmentSchema;
  db = require('./db');
  User = require('./user');
  Md = require('markdown');
  Schema = db.mongoose.Schema;
  AssignmentSchema = new Schema({
    title: String,
    description: String,
    deadline: Date,
    teacherId: String,
    teacherName: String
  });
  AssignmentSchema.virtual('datestring').get(function(){
    var month, date, hour, minute;
    month = this.deadline.getMonth() + 1 >= 10
      ? '' + (this.deadline.getMonth() + 1)
      : '0' + (this.deadline.getMonth() + 1);
    date = this.deadline.getDate() >= 10
      ? '' + this.deadline.getDate()
      : '0' + this.deadline.getDate();
    hour = this.deadline.getHours() >= 10
      ? '' + this.deadline.getHours()
      : '0' + this.deadline.getHours();
    minute = this.deadline.getMinutes() >= 10
      ? '' + this.deadline.getMinutes()
      : '0' + this.deadline.getMinutes();
    return this.deadline.getFullYear() + '/' + month + '/' + date + ' ' + hour + ':' + minute;
  });
  AssignmentSchema.virtual('briefdescription').get(function(){
    return this.description.substring(0, 140);
  });
  AssignmentSchema.virtual('htmlcontent').get(function(){
    return Md.markdown.toHTML(this.description);
  });
  module.exports = db.mongoose.model('Assignment', AssignmentSchema);
}).call(this);
