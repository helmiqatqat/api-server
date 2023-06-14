'use strict'
require('dotenv').config()
const petsRouter = require('./routes/pets.route')
const vehicleRouter = require('./routes/vehicle.route')
const express = require('express')
const server = express()


server.use(petsRouter)
server.use(vehicleRouter)

server.get('/', (req,res) => {
  res.send(`Welcome to the home page!`)
})

function start(port) {
  server.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
  })
}

module.exports = {
  server: server,
  start: start
}