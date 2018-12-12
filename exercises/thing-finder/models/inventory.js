const mongoose = require('mongoose')

inventorySchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports= mongoose.model("Inventory", inventorySchema)