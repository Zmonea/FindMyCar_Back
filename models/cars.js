const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
   make: String,
   model: String,
   year: Number,
   color: String,
   image: String,
   price: Number
})

const Cars = mongoose.model('Car', carSchema)

module.exports = Cars
