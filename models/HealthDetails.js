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
    },
    evaluationandplan: {
      type: DataTypes.TEXT,
    },
    prescriptiondetails: {
      type: DataTypes.TEXT,
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
    modelName: 'healthdetails',
  }
);

module.exports = HealthDetails;
