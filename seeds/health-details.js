const { HealthDetails } = require("../models");

const healthData = [
    {
        progressnotes: "",
        evaluationandplan: "",
        prescriptiondetails: "",
        patient_id: 2,
    },
    {
        progressnotes: "",
        evaluationandplan: "",
        prescriptiondetails: "",
        patient_id: 4,
    },
    {
        progressnotes: "",
        evaluationandplan: "",
        prescriptiondetails: "",
        patient_id: 3,
    },
]
const seedHealthDetails = async () => {
  try {
    await HealthDetails.bulkCreate(healthData);
    console.log('Health Details were seeded!');
  } catch (error) {
    console.error('Error with seeding health details', error);
  }
  };
module.exports = seedHealthDetails;