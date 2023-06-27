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
    address: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneno: {
      type: DataTypes.INTEGER,
    },
    insurancename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
    },
    occupation: {
      type: DataTypes.STRING,
    },
    apptdatetime: {
      type: DataTypes.DATE,
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
