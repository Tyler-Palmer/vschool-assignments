const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const uuid = require('uuid/v4')

// Simualated Database

let bounties = [
    {
        "First Name": "Duc",
        "Last Name": "Pham",
        "Living": true,
        "Bounty Amount": "1M",
        "Type": "Jedi",
        "ID": uuid()
    }
]

//Middleware
app.use(morgan('dev'))
app.use(express.json())

//Routes

app.use('/bounties', require('./routes/bounties'))

//Connect to the Database
mongoose.connect('mongodb://localhost:27107/bounties-list', { useNewUrlParser: true }, () => {
    console.log("Running smoothly, guv'nor!")
})



//Server
app.listen(5000, () => {
    console.log('listening at port 5000')
})