const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://root:password@localhost:27017'
const dbname = 'todos';

async function connectToDB() {
    try {
        const connection = await MongoClient.connect(url, {useUnifiedTopology: true})
        return connection.db(dbname)
    } catch (e) {
        console.log(e)
    }
}

module.exports.connectToDB = connectToDB;