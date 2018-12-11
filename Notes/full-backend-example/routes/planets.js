const express = require('express')
const planetRouter = express.Router()
const Planet = require('../models/planet')


// GET ALL 
planetRouter.get('/', (req, res) => {
    // Using .find() with no filtering object will send back the ENTIRE
    // collection of planets saved in the database
    Planet.find((err, data) => {
        if(err) {
            // handle that error
        }
        return res.status(200).send(data)
    })
})


// GET ONE
planetRouter.get('/:id', (req, res) => {
    // Using .findOne() and adding in the {_id: req.params.id}
    // Tells it to find a singular resource from the collection
    // of planets that matches that id.
    Planet.findOne({_id: req.params.id}, (err, planet) => {
        if (err) {
            // handle error
        }
        return res.status(200).send(planet)
    })
})

// POST
planetRouter.post('/', (req, res) => {
    // This uses the blue-print(Schema) to make sure the req.body object
    // matches the schema it's trying to save under.
    const newPlanet = new Planet(req.body)
    // Attempt to save new item in db, and db will return either an error or the saved object.
    newPlanet.save((err, planet) => {
        if(err) {
            // Handle it
        }
        return res.status(201).send(planet)
    })
})

// PUT
planetRouter.put('/:id', (req, res) => {
    Planet.findOneAndUpdate(
        {_id: req.params.id}, // Filter and find the planet with this ID
        req.body,             // Update that planet with this user object
        {new: true},          // Send back the updated version of the object in the response
        (err, updatedPlanet) => {
            if (err) {
                // Handle error
            }
            return res.status(201).send(updatedPlanet)
    })
})


// DELETE
planetRouter.delete('/:id', (req, res) => {
    Planet.findOneAndDelete(
        {_id: req.params.id}, 
        (err, deletedPlanet) => {
        if (err) {
            // handle error
        }
        return res.status(202).send("Successfully deleted that planet")
    })
})


module.exports = planetRouter