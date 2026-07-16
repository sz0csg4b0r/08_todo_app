module.exports = (objRep) => {
    const { todoModel, db, uuid } = objRep;

    return (req, res, next) => {
        if (typeof req.body.todo_txt == 'undefined') {
            //error
            return res.status(400).json({ error: 'Missing todo_text' })
        }
        const newTodo = {
            id: uuid.v4(),
            todo_txt: req.body.todo_txt,
        }
        todoModel.insert(newTodo);
        return db.saveDatabase((err) => {
            //return next();
            if (err) {
                return res.status(500).json({ error: 'Failed to save todo' });
            }
            return res.status(201).json(newTodo);
        })
    }
}
