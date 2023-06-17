'use strict'
require('dotenv').config()
const petsSchema = require('./pets/pets')
const vehiclesSchema = require('./vehicle/vehicle')
const { Sequelize, DataTypes } = require('sequelize')
const Collection = require('../lib/collection')
const db_url = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL

const sequelize = new Sequelize(db_url, {})

const petsTable = petsSchema(sequelize, DataTypes)
const vehiclesTable = vehiclesSchema(sequelize, DataTypes)

const petsCollection = new Collection(petsTable)
const vehicleCollection = new Collection(vehiclesTable)

petsTable.hasMany(vehiclesTable, {
  foreignKey: 'ownerID',
  sourceKey: 'id'
})
vehiclesTable.belongsTo(petsTable, {
  foreignKey: 'ownerID',
  targetKey: 'id'
})



module.exports = {
  db: sequelize,
  petsModel: petsCollection,
  vehiclesModel: vehicleCollection
}