const getAllTodos = async (db) => {
    return db.collection('todos').find().toArray()
}

const addTodo = async (db, newTodo) => { // mongodb insert data query
    return db.collection('todos').insertOne({"todo" : newTodo})
}

const completeTodo = async (db, id) => {
    return db.collection('todos').updateOne({ "_id" : id }, { $set: { "completed" : true } })
}

const deleteTodo = async (db, id) => {
    return db.collection('todos').deleteOne({ "_id" : id })
}

module.exports.getAllTodos = getAllTodos
module.exports.addTodo = addTodo
module.exports.completeTodo = completeTodo
module.exports.deleteTodo = deleteTodo