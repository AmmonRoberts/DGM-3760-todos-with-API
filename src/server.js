const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

const todosController = require('./todosController')
const categoriesController = require('./categoriesController')

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use("/todos", todosController)
app.use("/categories", categoriesController)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
