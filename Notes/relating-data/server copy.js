const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 6000

app.use(morgan('dev'))
app.use(express.json())


// Routes
app.use('/todo', require('./routes/todo'))


mongoose.connect(
    'mongodb://localhost:27017/dbname', 
    {useNewUrlParser: true}, 
    () => { console.log('[o] Connected to the db!')}
)


app.use((err, req, res, next) => {
    return res.send({ errMsg: err.message })
})



app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})