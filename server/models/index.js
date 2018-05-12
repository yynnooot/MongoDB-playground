const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/demo');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongodb connection error:'));

const statuses = ['open', 'closed'];

const pageSchema = new mongoose.Schema({
  title:    {type: String, required: true},
  urlTitle: {type: String, required: true},
  content:  {type: String, required: true},
  status:   {type: String, enum: statuses},
  date:     {type: Date, default: Date.now },
  author:   {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});
pageSchema.virtual('getRoute').get(function(){
  return '/wiki/' + this.urlTitle
})

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true}
});

const teacherSchema = new Schema({
  name: {type: String, required: true, unique: true},
  school: {type: String, required: true}
})

const Page = mongoose.model('Page', pageSchema);
const User = mongoose.model('User', userSchema);
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = {
  Page,
  User,
  Teacher
};