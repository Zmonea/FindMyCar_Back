//Dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const db = mongoose.connection
require('dotenv').config()

//Middleware
app.use(express.json())
app.use(cors())

// Port
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003

// Database
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI
// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI)

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));


//Controllers
const carsController = require('./controllers/cars.js')
app.use('/cars', carsController)

//Listener
app.listen(PORT, () => {
  console.log('Cars are Listening...', PORT);
})

mongoose.connection.once('open', () => {
  console.log('Connected to Mongod...');
})
