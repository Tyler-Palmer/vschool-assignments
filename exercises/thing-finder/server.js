const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()


//Middleware
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use('/inventory', require('./routes/inventory'))

//Connect to the db

mongoose.connect('mongodb://localhost:27017/thing-finder-db', {useNewUrlParser: true}, () =>{
    console.log("Cheerio, guv'nor, we're connected to the db!")
})

//Server

app.listen(9000, () => {
    console.log('server is running on port 9000')
})

