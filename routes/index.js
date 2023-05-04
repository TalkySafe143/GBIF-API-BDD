var express = require('express');
var router = express.Router();
const oracleClient = require('../lib/oracle/oracle');

router.get('/', async function(req, res, next) {

  const oracle = new oracleClient();

  res.json(await oracle.getAll('STUDENT'));
});

module.exports = router;
