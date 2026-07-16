module.exports = (objRep) => {
    const { todoModel, db } = objRep;
    return (req, res, next) => {
        if (typeof req.body.todo_txt !== 'undefined') {
            res.locals.todo.todo_txt = req.body.todo_txt;
        }

        if ((typeof req.body.todo_txt === 'undefined')) {
            return res.status(400).json({ error: 'Missing todo_text' })
        }

        todoModel.update(res.locals.todo);
        db.saveDatabase(err => {
            return next();
        })
    }
}

