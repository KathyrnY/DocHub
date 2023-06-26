const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class HealthDetails extends Model {}

HealthDetails.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    progressnotes: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    evaluationandplan: {
      type: DataTypes.INTEGER,
    },
    prescriptiondetails: {
      type: DataTypes.TEXT,
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
    modelName: 'healthdetails',
  }
);

module.exports = HealthDetails;
