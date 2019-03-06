const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')



bountyRouter.route('/')

    //Get All

    .get((req, res, next) => {
        Bounty.find((err, data) => {
            if (err) {
                res.status(500)
                return next(err)
            } else {
                return res.status(200).send(data)
            }
        })
    })

    //Create New

    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, bounty) => {
            if (err) {
                res.status(500)
                return next(err)
            } else {
                return res.status(201).send(bounty)
            }
        })
    })


//Get One

bountyRouter.route('/:id')

    .get((req, res, next) => {
        const bountyId = req.params.id
        Bounty.findOne({ _id: bountyId }, (err, bounty, next) => {
            if (err) {
                res.status(500)
                return next(err)
            } else {
                return res.status(201).send(bounty)
            }
        })
    })
//Put

bountyRouter.put('/:id', (req, res, next) => {
    // const editId = req.params.id
    Bounty.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, update) => {
        if (err) {
            res.status(500)
            return next(err)
        } else {
            return res.status(202).send(update)
        }
    })
})

//Delete

bountyRouter.delete('/:id', (req, res, next) => {
    Bounty.findOneAndDelete(req.params.id, (err, deleted) => {
        if(err){
            res.status(500)
            return next(err)
        }else{
            const response ={
                message: "Bounty Successfully Deleted",
                id: req.params.id
            }
            return res.status(202).send(deleted)
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
