'use strict'
const express = require('express')
const vehicleRouter = express.Router()
const { vehiclesModel } = require('../models/index')
vehicleRouter.use(express.json())

vehicleRouter.get('/all-vehicles', getAllVehicles);
vehicleRouter.get('/vehicle/:id', getVehicle);
vehicleRouter.post('/new-vehicle', addVehicle);
vehicleRouter.put('/update-vehicle/:id', updateVehicle);
vehicleRouter.delete('/remove-vehicle/:id', deleteVehicle)

async function getAllVehicles (req, res) {
  const result = await vehiclesModel.read()
  res.status(200).json(result)
}
async function getVehicle (req, res) {
  const vehicleID = req.params.id
  const result = await vehiclesModel.read(vehicleID)
  res.status(200).json(result)
}
async function addVehicle (req, res) {
  const body = req.body
  const result = await vehiclesModel.add(body)
  res.status(201).json(result)
}
async function updateVehicle (req, res) {
  const vehicleID = req.params.id
  const body = req.body
  const result = await vehiclesModel.update(body, vehicleID)
  res.status(201).json(result)
}
async function deleteVehicle (req, res) {
  const vehicleID = req.params.id
  const result = await vehiclesModel.delete(vehicleID)
  res.status(204).json(result)
}

module.exports = vehicleRouter