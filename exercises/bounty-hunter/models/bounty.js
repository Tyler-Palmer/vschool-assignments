const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bountySchema = new Schema({
    "firstName": {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    "lastName": {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    "type": {
        type: String,
        enum: ["jedi", "sith"],
        required: true,
        lowercase: true
    },
    "bountyAmount": {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Bounty', bountySchema)