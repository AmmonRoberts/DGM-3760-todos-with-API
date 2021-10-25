const router = require("express").Router();
const todos = require('./todos')

router.get('/', (req, res) => {
    res.send(todos);
});
router.get('/:category', (req, res) => {

    let results = todos.filter((todo, index) => {
        if (todo.category.toLowerCase() == req.params.category.toLowerCase()) {
            return todo;
        }
    });

    if (results) {
        res.send(results);
    }
    else {
        res.status(404).send("Todo not found!")
    }
});

router.post('/', async (req, res) => {
    let newId = Math.floor(Math.random() * 1000000);
    let newCategory = req.body.category
    let newTaskName = req.body.taskName
    newTodo = {
        id: newId,
        taskName: newTaskName,
        completed: false,
        category: newCategory
    }

    todos.push(newTodo)
    res.send(newTodo);
});

router.put('/:id', (req, res) => {
    let result = todos.find((todo, index) => {
        if (todo.id == req.params.id) {
            todo.taskName = req.body.taskName
            todo.category = req.body.category
            return true;
        }
    });

    if (result) {
        res.send(result);
    }
    else {
        res.status(404).send("Todo not found!")
    }
});

router.delete('/:id', (req, res) => {
    let result = todos.find((todo, index) => {
        if (todo.id == req.params.id) {
            todos.splice(index, 1)
            return true
        }
    });

    if (result) {
        res.send(result);
    }
    else {
        res.status(404).send("Todo not found!")
    }
});

module.exports = router;