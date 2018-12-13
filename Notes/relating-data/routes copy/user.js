const express = require('express')
const  userRouter = express.Router()
const User = require('../models/user')


userRouter.post('/signup', (req, res, next) => {
    User.find({_id: req.user.id }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if(user) {
            res.status(500)
            return next(new Error("That username is already taken"))
        }



    })
}) 


module.exports = userRouter