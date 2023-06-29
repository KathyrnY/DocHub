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
    // await HealthDetails.sync({ force: true });
    // try {
    //   await Promise.all(healthData.map((data) => HealthDetails.create(data)));
    //   console.log('Health Data Seeded!');
    // } catch (err) {
    //   console.error('Error in seeding', err);
    // }
  };
module.exports = seedHealthDetails;