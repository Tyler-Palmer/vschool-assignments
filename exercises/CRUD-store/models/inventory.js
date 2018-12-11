const mongoose = require('mongoose')

//Schema
const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    type: String
})

module.exports = mongoose.model("Inventory", inventorySchema)