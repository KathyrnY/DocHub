const { PatientDetails } = require('../models');

const patientData = [
  {
    first_name: 'Lucy',
    last_name: 'John',
    gender: 'Female',
    age: 60,
    race: 'White',
    street_address: '1257 East Bellow Ave, Greensboro, NC, 27214',
    phoneno: '(336)456-7788',
    insurancename: 'Senior Community Care of NC',
    occupation: 'Analyst',
    appt_date: '2023-07-01',
    appt_time: '20:00:00',
    comments: 'Experiencing chronic knee pain',
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
    phoneno: '(336)504-8899',
    insurancename: 'Cigna',
    occupation: 'Engineer',
    appt_date: '2023-07-01',
    appt_time: '17:00:00',
    comments: 'Experiencing chronic knee pain',
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
    phoneno: '(336)437-6677',
    insurancename: 'BCBS',
    occupation: 'Business',
    appt_date: '2023-07-01',
    appt_time: '19:30:00',
    comments: 'Experiencing chronic knee pain',
    doctor_id: 2,
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
    phoneno: '(336)221-3434',
    insurancename: 'BCBS',
    occupation: 'Nurse',
    appt_date: '2023-07-01',
    appt_time: '16:15:00',
    comments: 'Experiencing chronic knee pain',
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
