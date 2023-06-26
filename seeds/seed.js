const sequelize = require('../config/connections.js');
const physicianSeed = require('./physician-seed');
const patientSeed = require('./patient-seed');

const seedAll = async () => {
    await sequelize.sync({
        force: true
    });
    console.log("DB Synced");

    await physicianSeed();
    console.log("Physicians Seeded")

    await patientSeed();
    console.log("Patients Seeded")

};
seedAll();