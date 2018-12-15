const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')


// Simualated Database

// let bounties = [
//     {
//         "First Name": "Duc",
//         "Last Name": "Pham",
//         "Living": true,
//         "Bounty Amount": "1M",
//         "Type": "Jedi",
//         "ID": uuid()
//     }
// ]

//Middleware
app.use(morgan('dev'))
app.use(express.json())

//Routes

app.use('/bounties', require('./routes/bounties'))

//Error Handler Middleware

app.use((err, req, res, next) => {
    console.log(err)
    return res.send("There was... an unfortunate error Cap'n")
})

//Connect to the Database
mongoose.connect('mongodb://localhost:27017/bounties-list', { useNewUrlParser: true }, () => {
    console.log("Running smoothly, guv'nor!")
})



//Server
app.listen(9000, () => {
    console.log('listening at port 9000')
})