const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


// Middleware
app.use(express.json()) // Makes req.body available in POST and PUT requests.
app.use(morgan('dev'))  // Gives us console.log()'s in server everytime a request is made.


// Server Route(s)
app.use('/planets', require('./routes/planets'))
// app.use('/user', require('./routes/user'))



// Database Connect                         // name of db on local hard drive
mongoose.connect('mongodb://localhost:27017/mynewdatabase', {useNewUrlParser: true}, () => {
    console.log("connected to the db")
})


// Server 
app.listen(8000, () => {
    console.log(`[+] Server is running on port 8000`)
})