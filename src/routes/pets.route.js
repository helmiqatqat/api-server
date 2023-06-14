'use strict';
const express = require('express');
const { pets } = require('../models/index')
const petsRouter = express.Router();
petsRouter.use(express.json())

petsRouter.get('/all-pets', getAllPets);
petsRouter.get('/pet/:id', getPet);
petsRouter.post('/new-pet', addPet);
petsRouter.put('/update-pet/:id', updatePet);
petsRouter.delete('/remove-pet/:id', deletePet)

async function getAllPets (req, res) {
  const result = await pets.findAll()
  res.status(200).json(result)
}
async function getPet (req, res) {
  const petID = req.params.id
  const result = await pets.findOne({where: {id: petID}})
  res.status(200).json(result)
}
async function addPet (req, res) {
  const body = req.body
  const result = await pets.create(body)
  res.status(201).json(result)
}
async function updatePet (req, res) {
  const petID = req.params.id
  const body = req.body
  const result = await pets.update(body, {where: {id: petID}},)
  res.status(201).json(result)
}
async function deletePet (req, res) {
  const petID = req.params.id
  const result = await pets.destroy({where: {id: petID}})
  res.status(204).json(result)
}
module.exports = petsRouter

