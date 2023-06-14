'use strict'
require('dotenv').config()
const pets = require('./pets')
const vehicles = require('./vehicle')
const { Sequelize, DataTypes } = require('sequelize')
const db_url = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL

const sequelize = new Sequelize(db_url, {})

module.exports = {
  db: sequelize,
  pets: pets(sequelize, DataTypes),
  vehicles: vehicles(sequelize, DataTypes)
}