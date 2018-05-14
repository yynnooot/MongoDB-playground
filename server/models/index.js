const mongoose = require('mongoose')
const Schema = mongoose.Schema;

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

const Page = mongoose.model('Page', pageSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  User, 
  Page
}
