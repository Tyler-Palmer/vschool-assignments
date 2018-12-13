const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoGameSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    developer: String,
    platform: {
        type: String,
        default: "PS4"
    },
    releaseYear: Number
})


module.exports = mongoose.model("VideoGame", videoGameSchema)
