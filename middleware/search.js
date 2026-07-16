module.exports = (objRep) => {
    const { todoModel } = objRep;
    return (req, res, next) => {
        if (typeof req.body.search == 'undefined') {
            return res.status(400).json({ error: 'Missing search' })
            console.log('Missing search!' + req.body.search)
        }
        const s = req.body.search;
        const allTodos = todoModel.find();
        
        return res.json(allTodos.filter(e => e.todo_txt.includes(s)));
    }
}

