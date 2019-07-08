var getAllTodos = function (db, callback) {
    var collection = db.collection('todos')
    collection.find().toArray(function (err, documents) {
        callback(documents)
    })
}

var addTodo = function(db, newTodo, callback) { // mongodb insert data query
    var collection = db.collection('todos')
    collection.insertOne({"todo" : newTodo}, function(err, result) {
        callback(result)
    })
}

var completeTodo = function(db, id, callback) {
    var collection = db.collection('todos');
    collection.updateOne({ "_id" : id }
        , { $set: { "completed" : true } }, function(err, result) {
            callback(result)
        });
}

var deleteTodo = function(db, id, callback) {
    var collection = db.collection('todos');
    collection.deleteOne({ "_id" : id }, function(err, result) {
        callback(result)
    });
}

module.exports.getAllTodos = getAllTodos
module.exports.addTodo = addTodo
module.exports.completeTodo = completeTodo
module.exports.deleteTodo = deleteTodo