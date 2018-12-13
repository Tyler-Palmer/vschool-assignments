const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo')


// What each todo object will look l ike
// todo: {
//     title: '',
//     description: '',
//     _id: 2438523982394, Primary key: The id for the Todo
//     user: 823489894392  Foreign key: The id referencing who made this todo
// }

// Front end            UserID
// axios.post('/todos/489203858203', newTodo).then(res => {

// })

// Back end
// Here we are sending the user ID as req.params.id 
// Once we introduce user authentication, the user's
// _id will automatically be available in every request as req.user._id
todoRouter.post('/:id', (req, res, next) => {
    const newTodo = new Todo(req.body)
    // Adds user ID from req.params to the new Todo object
    newTodo.user = req.params.id
    newTodo.save((err, newTodo) => {
        if (err) {
            res.status(500)
            return next(err)
        }
       return res.status(201).send(newTodo)
    })
})


module.exports = todoRouter