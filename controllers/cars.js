const express = require('express')
const router = express.Router()
const carSeed = require('../models/seed.js')
const Cars = require('../models/cars.js')


// Create Route
router.post('/', (req,res) => {
   Cars.create(req.body, (error, createdCar) => {
      res.json(createdCar)
   })
})

// Read Route
router.get('/', (req,res) => {
   Cars.find({}, (error, foundCars) => {
      res.json(foundCars)
   })
})

// Update Route
router.put('/:id', (req,res) => {
   Cars.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedCar) => {
      res.json(updatedCar)
   })
})

// Delete Route
router.delete('/:id', (req,res) => {
   Cars.findByIdAndRemove(req.params.id, (error, deletedCar) => {
      res.json(deletedCar)
   })
})

// Seed Route
router.post('/seed', (req, res) => {
   Cars.create(carSeed, (error, data) => {
      res.redirect('/cars')
   })
})


module.exports = router
