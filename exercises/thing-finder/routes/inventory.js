const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

//Get all

inventoryRouter.get('/', (req, res) => {
    console.log(req.query)
    let type = req.query.type
    if(req.query.type){
    Inventory.find({type: type}, (err, data) => {
        if (err) {
            console.log(err)
        }
        return res.status(200).send(data)
    })
    }
    else{
        Inventory.find((err,data) => {
            return res.status(200).send(data)
        })
    }
})

//Post

inventoryRouter.post('/', (req, res) => {
   const newItem = new Inventory(req.body)
    newItem.save((err, inventory) => {
        if (err) {
            console.log(err)
        } else {
           return res.status(201).send(inventory)
        }
    })
})

module.exports = inventoryRouter