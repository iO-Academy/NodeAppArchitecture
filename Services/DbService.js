const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbname = 'todos';
const Client = new MongoClient(url, { useNewUrlParser: true })

function connectToDB(cb) {
    Client.connect(function (err) {
        let db = Client.db(dbname)
        cb(db);
    })
}

module.exports.connectToDB = connectToDB;