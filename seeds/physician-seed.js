const { PhysicianDetails } = require('../models');

const physicianData = [
  {
    id: '1224563780',
    first_name: 'Kathy',
    last_name: 'Long',
    email: 'kathy.long@dochub.com',
    username: 'kathy',
    password: 'password123',
    // npi: "1224563780",
  },
  {
    id: '5466789955',
    first_name: 'Wassim',
    last_name: 'Samra',
    email: 'wassim.samra@dochub.com',
    username: 'wassim',
    password: 'password234',
    // npi: "5466789955",
  },
  {
    id: '3356722334',
    first_name: 'Miranda',
    last_name: 'Diaz',
    email: 'miranda.diaz@dochub.com',
    username: 'miranda',
    password: 'password345',
    // npi: "3356722334",
  },
];
const seedPhysician = async () => {
  try {
    await PhysicianDetails.bulkCreate(physicianData);
    console.log('Physicians were seeded!');
  } catch (error) {
    console.error('Error with seeding physicians', error);
  }
};

module.exports = seedPhysician;
