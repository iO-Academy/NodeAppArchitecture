const ToDosController = require('../Controllers/ToDosController')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

function routes(app) {
    //get all uncompleted todos
    app.get('/todos', ToDosController.getTodos)

    //add a new todo
    app.post('/todos', jsonParser, ToDosController.addTodo)

    //complete a todo
    app.put('/todos/:id', ToDosController.completeTodo)

    // delete a todo
    app.delete('/todos/:id', ToDosController.deleteTodo)
}

module.exports = routes;

