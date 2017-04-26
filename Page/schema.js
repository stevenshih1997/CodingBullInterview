var mongoose = require('mongoose');

var Schema = mongoose.Schema({  
  title: String,
  body: String,
});

var Post = module.exports = mongoose.model('Post', Schema);

module.exports.createPost = function(newPost, callback){
          newPost.save(callback);

};