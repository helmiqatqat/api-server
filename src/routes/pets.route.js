'use strict';
const express = require('express');
const { petsModel, vehiclesModel } = require('../models/index');
const petsRouter = express.Router();
petsRouter.use(express.json())

petsRouter.get('/pets-vehicle/:id', petsVehicles)
petsRouter.get('/all-pets', getAllPets);
petsRouter.get('/pet/:id', getPet);
petsRouter.post('/new-pet', addPet);
petsRouter.put('/update-pet/:id', updatePet);
petsRouter.delete('/remove-pet/:id', deletePet)

async function petsVehicles(req, res) {
  const petID = req.params.id
  const result = await petsModel.readPetsVehicles(petID, vehiclesModel.model)
  res.status(200).json(result)
}
async function getAllPets (req, res) {
  const result = await petsModel.read()
  res.status(200).json(result)
}
async function getPet (req, res) {
  const petID = req.params.id
  const result = await petsModel.read(petID)
  res.status(200).json(result)
}
async function addPet (req, res) {
  const body = req.body
  const result = await petsModel.add(body)
  res.status(201).json(result)
}
async function updatePet (req, res) {
  const petID = req.params.id
  const body = req.body
  const result = await petsModel.update(body, petID)
  res.status(201).json(result)
}
async function deletePet (req, res) {
  const petID = req.params.id
  const result = await petsModel.delete(petID)
  res.status(204).json(result)
}


module.exports = petsRouter

