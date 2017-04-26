var express = require('express');
var router = express.Router();

var Post = require('./schema');

router.post('/post', function(req, res) {
  var newPost = new Post({
    title: req.body.title,
    body: req.body.body,
  });
  Post.createPost(newPost, function(err, post) {
    if(err) throw err;
    console.log(post);
  });
  res.redirect('/page/posts');
});

router.get('/posts', function(req, res) {
  Post.find({}, function (err, posts) {
        if (err) return res.status(500).send("Problem finding posts");
        res.status(200).send(posts);
          // res.status(200).json({
          //   title: req.posts.title
          // });
    });

});

router.delete('/', function(req, res) {
  Post.remove({}, function(err, users) {
     if (err) return res.status(500).send("Problem deleting posts");
         res.status(200).send("Posts deleted");
  });
});



module.exports = router;