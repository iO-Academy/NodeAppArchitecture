const TodosService = require('../Services/ToDosService')
const DbService = require('../Services/DbService')
const ObjectId = require('mongodb').ObjectId

function getTodos(req, res) {
    DbService.connectToDB(function(db) {
        TodosService.getAllTodos(db, function (documents) {
            res.json(documents)
        })
    })
}

function addTodo(req, res) {
    let newTodo = req.body.todo
    DbService.connectToDB(function(db) {
        TodosService.addTodo(db, newTodo, function (result) {
            if(result.insertedCount === 1){
                res.json({success: true, msg: 'inserted todo into db', data: []})
            } else {
                res.json({success: false, msg: 'nope, didnt work', data: []})
            }
        })
    })
}

function completeTodo(req, res) {
    let id = ObjectId(req.params.id)
    DbService.connectToDB(function(db) {
        completeTodo(db, id, function (result) {
            if(result.modifiedCount){
                res.json({success: true, msg: 'edited db', data: []})
            } else {
                res.json({success: false, msg: 'nope, didnt work', data: []})
            }
        })

    })
}

function deleteTodo(req, res) {
    let id = ObjectId(req.params.id)
    DbService.connectToDB(function(db) {
        TodosService.deleteTodo(db, id, function (result) {
            if(result.deletedCount){
                res.json({success: true, msg: 'deleted doc from db', data: []})
            } else {
                res.json({success: false, msg: 'nope, didnt work', data: []})
            }
        })
    })
}

module.exports.getTodos = getTodos
module.exports.addTodo = addTodo
module.exports.completeTodo = completeTodo
module.exports.deleteTodo = deleteTodo