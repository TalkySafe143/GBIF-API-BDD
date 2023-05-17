const config = require('../../config/config');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const debug = require('debug')("api::mongo");

const uri = `mongodb+srv://root:${config.passwordMongo}@users.3b84wwp.mongodb.net/?retryWrites=true&w=majority`

class Mongo {
    constructor() {
        this.client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true
            }
        })
    }

    async connect() {
        if (!Mongo.connection) {
            try {
                Mongo.connection = await this.client.connect();

                // Mandar un ping para asegurar la conexion
                await this.client.db("Users").command({ ping: 1 });

                debug("Conexion con mongo exitosa!")
            } catch (err) {
                debug(err);
            }
        }

        return Mongo.connection.db("Users");
    }

    getAll(collection, query) {
        return this.connect()
            .then(db => db.collection(collection).find(query).toArray())
    }

    insert(collection, data) {
        return this.connect()
            .then(db => db.collection(collection).insertOne(data))
            .then(result => result.insertedId);
    }

    update(collection, id ,data) {
        return this.connect()
            .then(db => db.collection(collection).updateOne({ _id: new ObjectId(id) }, { $set: data }, { upsert: true }))
            .then(result => result.upsertedId || id);
    }

    delete(collection, id) {
        return this.connect()
            .then((db) => {
                return db.collection(collection).deleteOne({ _id: new ObjectId(id) });
            })
            .then(() => id);
    }
}

module.exports = Mongo;