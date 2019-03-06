const express = require('express')
const app = express()

app.get('/', (req, res) => {

    //API Stuff happens here

    res.send("Hello world")
})

//URL: www.google.com/photos?type=nike&size=9
//ENDPOINT: /photos
//QUERY: ?key=value => Filtering data from database
//PARAMS: Requesting a specific item from db

//DATA IN A DATABASE
    //Collection: Todos
    //Resource: Todo





app.listen(8000, () => {
    console.log("server is running on port 8000")
})