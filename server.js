//Dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

//Middleware
app.use(express.json())
app.use(cors())

//Controllers
const carsController = require('./controllers/cars.js')
app.use('/cars', carsController)

//Listener
app.listen(3000, () => {
  console.log('Cars are Listening...');
})

mongoose.connect('mongodb://localhost:27017/cars')
mongoose.connection.once('open', () => {
  console.log('Connected to Mongod...');
})
