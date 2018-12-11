const mongoose = require('mongoose')

// Schema / Model
// Blueprint for what all planet objects in our db should look like
const planetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number
    }
})

module.exports = mongoose.model("Planet", planetSchema)