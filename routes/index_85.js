var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index_85', {
    title: 'DB-midpreject',
    name: 'ShihWei-Tang',
    id: '209410785',
   });
});

module.exports = router;
