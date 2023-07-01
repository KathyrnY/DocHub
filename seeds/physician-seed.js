const { User } = require('../models');

const physicianData = [
  {
    // id: 1224563780,
    first_name: 'Kathy',
    last_name: 'Long',
    email: 'kathy.long@dochub.com',
    username: 'kathy',
    password: '$2b$10$yNvwS1Xk01x5gDXgYYLa5.BtkCxQGrdJFnluHIzRk0dN3h.21kGU6',
    // npi: "1224563780",
  },
  {
    // id: 5466789955,
    first_name: 'Wassim',
    last_name: 'Samra',
    email: 'wassim.samra@dochub.com',
    username: 'wassim',
    password: '$2b$10$n6n/adzcHOjAcBcmc3Dwg.fltdGJ5DeoNXFEavt73Xo/ZXtBO1KxC',
    // npi: "5466789955",
  },
  {
    // id: 3356722334,
    first_name: 'Miranda',
    last_name: 'Diaz',
    email: 'miranda.diaz@dochub.com',
    username: 'miranda',
    password: '$2b$10$6r7jqzo5ESJziLzXPF5WMu0sZt8gQSkD5AQk6/cOFau6w/0/k2nxe',
    // npi: "3356722334",
  },
  {
    // id: 3356722334,
    first_name: 'Jess',
    last_name: 'Kathyrn',
    email: 'jesskathy@dochub.com',
    username: 'jesskathy',
    password: '$2b$10$Oao16jx3XbEU7Khfs9/ateA24URoBZB4Aux7fM9xjvnTJqun1oH5S',
    // npi: "3356722334",
  },
];
const seedPhysician = async () => {
  try {
    await User.bulkCreate(physicianData);
    console.log('Physicians were seeded!');
  } catch (error) {
    console.error('Error with seeding physicians', error);
  }
};

module.exports = seedPhysician;
