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
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'patientdetails',
        key: 'id',
      },
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
