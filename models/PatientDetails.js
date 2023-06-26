const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PatientDetails extends Model {}

PatientDetails.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {},
    age: {
      type: DataTypes.INTEGER,
    },
    phoneno: {
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.STRING,
    },
    occupation: {
      type: DataTypes.STRING,
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'patientdetails',
  }
);

module.exports = PatientDetails;
