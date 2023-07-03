const sequelize = require('../config/connection');
const physicianSeed = require('./physician-seed');
const patientSeed = require('./patient-seed');
const healthDetailsSeed = require('./health-details');
const healthDetailsExtSeed = require('./health-details-ext');
const testResultsSeed = require('./test-results');
const seedComments = require('./comment-seed');

const seedAll = async () => {
  await sequelize.sync({
    force: true,
  });
  console.log('DB Synced');

  await physicianSeed();
  console.log('Physicians Seeded');

  await patientSeed();
  console.log('Patients Seeded');

  await healthDetailsSeed();
  console.log('Health Details Seeded');

  await healthDetailsExtSeed();
  console.log('Health Details Ext Seeded');

  await testResultsSeed();
  console.log('Test Results Seeded');

  await seedComments();
  console.log('Comments connected from DB');
};
seedAll();
