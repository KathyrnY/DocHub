const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TestResults extends Model {}

TestResults.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    testname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    testresults: {
      type: DataTypes.TEXT,
    },
    doctorscomments: {
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
    modelName: 'TestResults',
  }
);

module.exports = TestResults;
