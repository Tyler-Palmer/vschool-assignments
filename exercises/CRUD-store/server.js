const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//Middleware
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use('/inventory', require('./routes/inventory'))

//Database Connection
mongoose.connect('mongodb://localhost:27017/crud-store', {useNewUrlParser: true}, () => {
    console.log("connected to the db")
})



app.listen(8000, () => {
    console.log("server is running on port 8000")
})