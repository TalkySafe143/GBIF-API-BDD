const Mongo = require('../lib/mongo/mongo');
const bcrypt = require('bcrypt')
const { ObjectId } = require("mongodb");

const mongo = new Mongo();

async function getAllUsers() {
    return await mongo.getAll('users', {});
}

async function getOneUserWithID({ id }) {
    const [user] = await mongo.getAll('users', { _id:   new ObjectId(id) });
    return user;
}

async function getUser({ email }) {
    const [ user ] = await mongo.getAll('users', { email });
    return user;
}

async function createUser({ user }) {
    const { name, email, password, isAdmin } = user;

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUserID = await mongo.insert('users', { name, email,  password: hashedPassword, isAdmin });

    return createdUserID;
}

async function getOrCreateUser({ user }) {
    const queriedUser = await getUser({ email: user.email });

    if (queriedUser) return queriedUser;

    await createUser({ user });

    return await getUser({ email: user.email });
}

async function updateUser({ userID, data }) {
    const updatedMovieId = await mongo.update('users', userID, data);
    return updatedMovieId;
}

async function deleteUser({ userID }) {
    const deletedUser = await mongo.delete('users', userID);
    return deletedUser;
}

module.exports = { getUser, createUser, getOrCreateUser, updateUser, deleteUser, getAllUsers, getOneUserWithID };