const { Patient } = require("../models");

const patientData = [
    {
        first_name: "Lucy",
        last_name: "John",
        sex: "Female",
        age: 60,
        race: "White",
        street_address: "1257 East Bellow Ave",
        city: "Greensboro",
        state: "NC",
        zipcode: "27214",
        phone: "(336)-456-7788",
        insurance_name: "Senior Community Care of NC",
        allergies:  "Penecillin",
        history: "Diabetes", 
    },
    {
        first_name: "Yun",
        last_name: "Zhao",
        sex: "Female",
        age: 48,
        race: "East Asian",
        street_address: "4456 Flowers Ave",
        city: "Greensboro",
        state: "NC",
        zipcode: "27217",
        phone: "(336)-504-8899",
        insurance_name: "Cigna",
        allergies:  "null",
        history: "null", 
    },
    {
        first_name: "Jack",
        last_name: "Garcia",
        sex: "Male",
        age: 56,
        race: "Hispanic",
        street_address: "9977 Iron St",
        city: "Greensboro",
        state: "NC",
        zipcode: "27219",
        phone: "(336)-437-6677",
        insurance_name: "BCBS",
        allergies:  "null",
        history: "null", 
    },
    {
        first_name: "Ali",
        last_name: "Naser",
        sex: "Male",
        age: 53,
        race: "Middle Eastern",
        street_address: "2233 Heron St",
        city: "Greensboro",
        state: "NC",
        zipcode: "27222",
        phone: "(336)-221-3434",
        insurance_name: "BCBS",
        allergies:  "null",
        history: "null",
    }
]

const seedPatients = async () => {
    try {
      await Patient.bulkCreate(patientData);
      console.log("Patients were seeded!");
    } catch (error) {
      console.error("Error with seeding patients", error);
    }
  };
  
  module.exports = seedPatients;