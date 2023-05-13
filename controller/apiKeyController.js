const Mongo = require('../lib/mongo/mongo');

const mongo = new Mongo();

async function getAPIKey({ token }) {
    const [ apiScopes ] = await mongo.getAll('authScopes', { token });
    return apiScopes;
}

module.exports = { getAPIKey }