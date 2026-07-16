module.exports = (objRep) => {
    const { todoModel } = objRep;
    return (req, res, next) => {
        const oneTodo = todoModel.findOne(
            {
                id: req.params.id
            });
        if (!oneTodo) {
            return res.status(404).json({ error: `TODO not found with id: ${req.params.id}` });
        }
        res.locals.todo = oneTodo;
        return next();
    }
}