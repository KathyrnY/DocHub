const User = require('./User');
const PatientDetails = require('./PatientDetails');
const HealthDetails = require('./HealthDetails');
const HealthDetailsEXT = require('./HealthDetailsEXT');
const TestResults = require('./TestResults');
const Comment = require('./Comments');

User.hasMany(PatientDetails, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

PatientDetails.belongsTo(User, {
  foreignKey: 'user_id',
});

PatientDetails.hasMany(HealthDetails, {
  foreignKey: 'patient_id',
  onDelete: 'CASCADE',
});

HealthDetails.belongsTo(PatientDetails, {
  foreignKey: 'patient_id',
});

PatientDetails.hasMany(HealthDetailsEXT, {
  foreignKey: 'patient_id',
  onDelete: 'CASCADE',
});

HealthDetailsEXT.belongsTo(PatientDetails, {
  foreignKey: 'patient_id',
});

PatientDetails.hasMany(TestResults, {
  foreignKey: 'patient_id',
  onDelete: 'CASCADE',
});

TestResults.belongsTo(PatientDetails, {
  foreignKey: 'patient_id',
});
PatientDetails.hasMany(Comment, {
  foreignKey: 'patientdetails_id',
  as: 'patient_comments', 
  onDelete: 'CASCADE',
});

Comment.belongsTo(PatientDetails, {
  foreignKey: 'patientdetails_id',
  as: 'patient', 
});

module.exports = {
  User,
  PatientDetails,
  HealthDetails,
  HealthDetailsEXT,
  TestResults,
  Comment,
};
