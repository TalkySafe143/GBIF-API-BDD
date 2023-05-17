const Oracle = require('../lib/oracle/oracle');
const oracleDb = new Oracle();
const boom = require('@hapi/boom')
const queryBuilder = require('../utils/sql/queryBuilder');

const acceptedTables = [
    'collection',
    'dataset',
    'digitalentity',
    'entity',
    'entity_assertion',
    'entityevent',
    'entityrelationship',
    'event',
    'eventassertion',
    'identification',
    'identification_assertion',
    'identificationentity',
    'location',
    'organism',
    'protocol',
    'taxon',
    'taxonassertion',
    'taxonidentification'
];

async function getRecords({ schema }, queries) {
    //if (!acceptedTables.find((val => val === schema))) throw boom.badRequest('La tabla no existe')
    queries["FROM"] = queries["FROM"] ? [ schema, ...queries["FROM"]] : [ schema ];
    const data = await oracleDb.executeStatement(queryBuilder.generateQuery(queries));
    return data.rows;
}

async function insertTuple({ schema }, data) {
    //if (!acceptedTables.find((val => val === schema))) throw boom.badRequest('La tabla no existe')
    const resp = await oracleDb.executeStatement(queryBuilder.generateInsertStatement(schema, data));
    return resp;
}

async function updateTuple({ schema }, condition) {
    //if (!acceptedTables.find((val => val === schema))) throw boom.badRequest('La tabla no existe')
    const resp = await oracleDb.executeStatement(queryBuilder.generateUpdateStatement(schema, condition));
    return resp;
}

async function deleteTuple({ schema }, data) {
    //if (!acceptedTables.find((val => val === schema))) throw boom.badRequest('La tabla no existe')
    const resp = await oracleDb.executeStatement(queryBuilder.generateDeleteStatement(schema, data));
    return resp;
}

module.exports = { getRecords, insertTuple, updateTuple, deleteTuple }