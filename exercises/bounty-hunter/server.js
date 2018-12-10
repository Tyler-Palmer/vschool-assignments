const express = require('express')
const app = express()
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

app.use(express.json())

//Routes

//Get All
app.get('/bounties', (req, res) => {
    res.send(bounties)
})

//Get One

app.get('/bounties/:id', (req, res) => {
    const bountyID = req.params.id
    const selectedBounty = bounties.filter(item => item.ID === bountyID)
    res.send(selectedBounty)
})

//Post -- Add One

app.post('/bounties', (req, res) => {
    const newBounty = req.body
    newBounty.ID = uuid()
    bounties.push(newBounty)
    res.send(bounties)
})

//Put

app.put('/bounties:id', (req, res) => {
    const bountyID = req.params.id
    const updateBounty = req.body
    const selectedBounty = bounties.filter(item => item.ID === bountyID)

})

//Delete

app.delete('/bounties/:id', (req, res) => {
    const bountyID = req.params.id
    const updatedBounties = bounties.filter(item => item.ID !== bountyID)
    bounties = updatedBounties
    res.send(bounties)
})




//Server
app.listen(5000, () => {
    console.log('listening at port 5000')
})