var express = require('express');
var router = express.Router();

var Post = require('./schema');

router.post('/post', function(req, res) {
  var newpost = new Post({
    title: req.body.title,
    body: req.body.body,
  });
  

});

// router.get('/' ,function(req, res) {
//   res.status(200).json({
//       title: req.body.title,
//     });
// });


module.exports = router;