const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

//Get all

inventoryRouter.get('/', (req, res) => {
    Inventory.find({type:req.query},(err, data) => {
        if (err) {
            console.log(err)
        } else if (!req.query){
            return res.status(200).send(data)
        } else{
            return res.status(200).send(data.query)
        }
    })
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