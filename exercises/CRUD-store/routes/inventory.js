const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

// Get All

inventoryRouter.get('/', (req, res) => {
    Inventory.find((err, data) => {
        if(err){
            //Do something about it
        }
        return res.status(200).send(data)
    })
})

// Get One

inventoryRouter.get('/:id', (req, res) => {
    
    Inventory.findOne({_id: req.params.id}, (err, inventory) => {
        if(err){
            //handle that
        }
        return res.status(200).send(inventory)
    })
})

// Post

inventoryRouter.post('/', (req, res) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, inventory) => {
        if (err){
            //take care of it
        }
        return res.status(201).send(inventory)
    })
})

// Put

inventoryRouter.put('/:id', (req, res) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        (err, updatedItem) => {
            if (err) {
                // handle it
            }
            return res.status(201).send(updatedItem)
        }
    )
})

// Delete

inventoryRouter.delete('/:id', (req, res) => {
    Inventory.findOneAndDelete(
        {_id: req.params.id},
        (err, deletedItem) => {
            if (err) {
                //do something about it already
            }
            return (res.status(202).send("Successfully deleted the item"))
        }
    )
})

module.exports = inventoryRouter