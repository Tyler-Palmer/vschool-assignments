const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')

//Get All

bountyRouter.get('/', (req, res) => {
    Bounty.find((err, data) => {
        if(err){
            console.log(err)
        }else{
            res.status(200).send(data)
        }
    })
})

module.exports = bountyRouter


// //Get All
// app.get('/bounties', (req, res) => {
//     res.send(bounties)
// })

// //Get One

// app.get('/bounties/:id', (req, res) => {
//     const bountyID = req.params.id
//     const selectedBounty = bounties.find(item => item.ID === bountyID)
//     res.send(selectedBounty)
// })

// //Post -- Add One

// app.post('/bounties', (req, res) => {
//     const newBounty = req.body
//     newBounty.ID = uuid()
//     bounties.push(newBounty)
//     res.send(newBounty)
// })

// //Put

// app.put('/bounties/:id', (req, res) => {
//     const bountyID = req.params.id
//     const bountyUpdate = req.body
//     const updatedBounties = bounties.map(bounty => bounty.ID === bountyID ? {...bounty, ...bountyUpdate} : bounty)
//     res.send(updatedBounties)
// })

// //Delete

// app.delete('/bounties/:id', (req, res) => {
//     const bountyID = req.params.id
//     const updatedBounties = bounties.filter(item => item.ID !== bountyID)
//     bounties = updatedBounties
//     res.send(bounties)
// })
