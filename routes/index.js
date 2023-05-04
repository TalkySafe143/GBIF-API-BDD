var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    hola: 'Hoila'
  })
});

module.exports = router;
