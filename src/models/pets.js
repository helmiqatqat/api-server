const pets = (sequelize, DataTypes) => {
  return (
    sequelize.define('pets', {
      name: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.STRING,
      }
    })
  )
}

module.exports = pets