const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class HealthDetailsEXT extends Model {}

HealthDetailsEXT.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    condition: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'healthdetailsext',
  }
);

module.exports = HealthDetailsEXT;
