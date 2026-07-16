const uuid = require('uuid');
const getTodosMW = require('../middleware/getTodos');
const getTodoMW = require('../middleware/getTodo');
const createTodoMW = require('../middleware/createTodo');
const deleteTodoMW = require('../middleware/deleteTodo');
const updateTodoMW = require('../middleware/updateTodo.js');
const searchMW = require('../middleware/search.js');
//const renderMW = require('../middleware/render')

function addRoutes(app, db, todoModel) {
    const objRep = {
        todoModel, db, uuid
    };

    // API endpointok: 
    app.get('/api/todo',
        getTodosMW(objRep),
        (req, res, next) => res.json(res.locals.todos));

    app.get('/api/todo/:id',
        getTodoMW(objRep),
        (req, res, next) => res.json(res.locals.todo));

    app.put('/api/todo',
        createTodoMW(objRep),
        (req, res, next) => res.json(res.locals.todo));

    app.delete('/api/todo/:id',
        getTodoMW(objRep),
        deleteTodoMW(objRep),
        (req, res, next) => res.json(res.locals.todo));

    app.patch('/api/todo/:id',
        getTodoMW(objRep),
        updateTodoMW(objRep),
        (req, res, next) => res.json(res.locals.todo));

    app.post('/api/search/',
        searchMW(objRep));

}
module.exports = addRoutes;


