module.exports = (objRep) => {
    const { todoModel, db } = objRep;
    return (req, res, next) => {
        const deletedTodo = res.locals.todo;
        todoModel.remove(deletedTodo);
        db.saveDatabase(err => {
            res.locals.todo = deletedTodo;
            return next();
        })
    }
}


