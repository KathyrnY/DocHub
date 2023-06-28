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
    await HealthDetails.sync({ force: true });
    try {
      await Promise.all(healthData.map((data) => HealthDetails.create(data)));
      console.log('Health Data Seeded!');
    } catch (err) {
      console.error('Error in seeding', err);
    }
  };
seedHealthDetails();