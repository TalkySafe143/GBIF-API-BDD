const Mongo = require('../lib/mongo/mongo');
const bcrypt = require('bcrypt')

const mongo = new Mongo();

async function getUser({ email }) {
    const [ user ] = await mongo.getAll('users', { email });
    return user;
}

async function createUser({ user }) {
    const { name, email, password } = user;

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUserID = await mongo.insert('users', { name, email,  password: hashedPassword });

    return createdUserID;
}

async function getOrCreateUser({ user }) {
    const queriedUser = await getUser({ email: user.email });

    if (queriedUser) return queriedUser;

    await createUser({ user });

    return await getUser({ email: user.email });
}

module.exports = { getUser, createUser, getOrCreateUser };