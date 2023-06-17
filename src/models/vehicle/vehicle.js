const vehicles = (sequelize, DataTypes) => {
  return (
    sequelize.define('vehicles', {
      manifacture: {
        type: DataTypes.STRING,
      },
      model: {
        type: DataTypes.TEXT,
      },
      year: {
        type: DataTypes.INTEGER,
      },
      ownerID: {
        type: DataTypes.INTEGER,
      }
    })
  )
}

module.exports = vehicles;