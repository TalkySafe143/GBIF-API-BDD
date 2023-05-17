
const crypto =require('crypto');
const debug =require('debug')("api:seed");
const Mongo = require('../lib/mongo/mongo.js');

const generateRandomToken = () => crypto.randomBytes(32).toString('hex');

const adminScopes = [
    'read:cameraDP',
    'create:cameraDP',
    'update:cameraDP',
    'delete:cameraDP',
    'read:users',
    'create:users',
    'update:users',
    'delete:users'
];

const userScope = [
    'read:cameraDP',
    'read:users',
    'create:users',
    'update:users',
    'delete:users'
]

const apiKeys = [
    {
        token: generateRandomToken(),
        scopes: adminScopes
    },
    {
        token: generateRandomToken(),
        scopes: userScope
    }
]

async function seedAPIkeys() {
    try {
        const mongo = new Mongo();

        const promises = apiKeys.map(async apiKey => {
            await mongo.insert('authScopes', apiKey);
        })

        await Promise.all(promises);
        debug(`${promises.length} api KEYS creadas exitosamente`)
        return process.exit(0);
    } catch (err) {
        debug(err);
        process.exit(1);
    }
}

seedAPIkeys();