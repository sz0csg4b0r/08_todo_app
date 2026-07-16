const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { initDatabase } = require('./service/db');
const addRoutes = require('./route');  //indexjs defa

app.use(bodyParser.json())

initDatabase((err, { db, todoModel }) => {
    if (err) {
        return console.err(err)
    }

    addRoutes(app, db, todoModel);

    app.listen(6000, function () {
        console.log('TODO SERVER Running on :6000');
    });
});