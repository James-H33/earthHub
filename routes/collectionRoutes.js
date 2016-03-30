var express = require('express');
var router  = express.Router();

router.get('/collections', function(req, res) {
  res.render('collections/collections');
});

module.exports = router;
