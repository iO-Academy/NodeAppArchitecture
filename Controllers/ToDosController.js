const TodosService = require('../Services/ToDosService')
const DbService = require('../Services/DbService')
const ObjectId = require('mongodb').ObjectId

async function getTodos(req, res) {
    const db = await DbService.connectToDB()
    const documents = await TodosService.getAllTodos(db)
    res.json(documents)
}

async function addTodo(req, res) {
    let newTodo = req.body.todo
    const db = await DbService.connectToDB()
    const result = await TodosService.addTodo(db, newTodo)
    if (result.insertedCount === 1){
        res.json({success: true, msg: 'inserted todo into db', data: []})
    } else {
        res.json({success: false, msg: 'nope, didnt work', data: []})
    }

}

async function completeTodo(req, res) {
    let id = ObjectId(req.params.id)
    const db = await DbService.connectToDB()
    const result = await TodosService.completeTodo(db, id)
    if (result.modifiedCount){
        res.json({success: true, msg: 'edited db', data: []})
    } else {
        res.json({success: false, msg: 'nope, didnt work', data: []})
    }
}

async function deleteTodo(req, res) {
    let id = ObjectId(req.params.id)
    const db = await DbService.connectToDB()
    const result = await TodosService.deleteTodo(db, id)
    if (result.deletedCount){
        res.json({success: true, msg: 'deleted doc from db', data: []})
    } else {
        res.json({success: false, msg: 'nope, didnt work', data: []})
    }
}

module.exports.getTodos = getTodos
module.exports.addTodo = addTodo
module.exports.completeTodo = completeTodo
module.exports.deleteTodo = deleteTodo