const express = require('express')
const videoGameRouter = express.Router()
const VideoGame = require('../models/videoGame')


videoGameRouter.get('/', (req, res, next) => {
    VideoGame.find((err, allGames) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(allGames)
    })
})

videoGameRouter.post('/', (req, res, next) => {
    const newVideoGame = new VideoGame(req.body)
    newVideoGame.save((err, newGame) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newGame)
    })
})


module.exports = videoGameRouter