'use strict'
const express = require('express')
const vehicleRouter = express.Router()
const { vehicles } = require('../models/index')
vehicleRouter.use(express.json())

vehicleRouter.get('/all-vehicles', getAllvehicles);
vehicleRouter.get('/vehicle/:id', getvehicle);
vehicleRouter.post('/new-vehicle', addvehicle);
vehicleRouter.put('/update-vehicle/:id', updatevehicle);
vehicleRouter.delete('/remove-vehicle/:id', deletevehicle)

async function getAllvehicles (req, res) {
  const result = await vehicles.findAll()
  res.status(200).json(result)
}
async function getvehicle (req, res) {
  const vehicleID = req.params.id
  const result = await vehicles.findOne({where: {id: vehicleID}})
  res.status(200).json(result)
}
async function addvehicle (req, res) {
  const body = req.body
  const result = await vehicles.create(body)
  res.status(201).json(result)
}
async function updatevehicle (req, res) {
  const vehicleID = req.params.id
  const body = req.body
  const result = await vehicles.update(body, {where: {id: vehicleID}},)
  res.status(201).json(result)
}
async function deletevehicle (req, res) {
  const vehicleID = req.params.id
  const result = await vehicles.destroy({where: {id: vehicleID}})
  res.status(204).json(result)
}
module.exports = vehicleRouter