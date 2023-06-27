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
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    insurancename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    occupation: {
      type: DataTypes.STRING,
    },
    street_address: {
      type: DataTypes.STRING,
    },
    phoneno: {
      type: DataTypes.INTEGER,
    },
    appt_date_time: {
      type: DataTypes.DATE,
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
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
