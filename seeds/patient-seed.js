const { PatientDetails } = require('../models');

const patientData = [
  {
    first_name: 'Lucy',
    last_name: 'John',
    gender: 'Female',
    age: 60,
    race: 'White',
    street_address: '1257 East Bellow Ave, Greensboro, NC, 27214',
    // city: "Greensboro",
    // state: "NC",
    // zipcode: "27214",
    phoneno: 336 - 456 - 7788,
    insurancename: 'Senior Community Care of NC',
    occupation: 'Nurse',
    appt_date_time: '2022-01-17',
    doctor_id: 2,
    // allergies:  "Penecillin",
    // history: "Diabetes",
  },
  {
    first_name: 'Yun',
    last_name: 'Zhao',
    gender: 'Female',
    age: 48,
    race: 'East Asian',
    street_address: '4456 Flowers Ave, Greensboro, NC, 27217',
    // city: "Greensboro",
    // state: "NC",
    // zipcode: "27217",
    phoneno: 336 - 504 - 8899,
    insurancename: 'Cigna',
    occupation: 'Nurse',
    appt_date_time: '',
    doctor_id: 1,
    // allergies:  "null",
    // history: "null",
  },
  {
    first_name: 'Jack',
    last_name: 'Garcia',
    gender: 'Male',
    age: 56,
    race: 'Hispanic',
    street_address: '9977 Iron St, Greensboro, NC, 27219',
    // city: "Greensboro",
    // state: "NC",
    // zipcode: "27219",
    phoneno: 336 - 437 - 6677,
    insurancename: 'BCBS',
    occupation: 'Nurse',
    appt_date_time: '',
    doctor_id: 3,
    // allergies:  "null",
    // history: "null",
  },
  {
    first_name: 'Ali',
    last_name: 'Naser',
    gender: 'Male',
    age: 53,
    race: 'Middle Eastern',
    street_address: '2233 Heron St, Greensboro, NC, 27222',
    // city: "Greensboro",
    // state: "NC",
    // zipcode: "27222",
    phoneno: 3362213434,
    insurancename: 'BCBS',
    occupation: 'Nurse',
    appt_date_time: '',
    doctor_id: 1,
    // allergies:  "null",
    // history: "null",
  },
];

const seedPatients = async () => {
  try {
    await PatientDetails.bulkCreate(patientData);
    console.log('Patients were seeded!');
  } catch (error) {
    console.error('Error with seeding patients', error);
  }
};

module.exports = seedPatients;
