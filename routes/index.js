var express = require('express');
var router = express.Router();
const oracleClient = require('../lib/oracle/oracle');
const Mongo = require('../lib/mongo/mongo');

router.get('/', async function(req, res, next) {

  const mongo = new Mongo();

  res.json(await mongo.getAll('authScopes'));

  //const oracle = new oracleClient();

  //res.json(await oracle.getAll('JOBS'));
});

module.exports = router;
