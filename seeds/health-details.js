const { HealthDetails } = require('../models');

const healthData = [
  {
    progressnotes: 'None',
    evaluationandplan: 'None',
    prescriptiondetails: 'None',
    patient_id: 1,
  },
  {
    progressnotes: 'None',
    evaluationandplan: 'Come Back in a month',
    prescriptiondetails: 'Vitamin D',
    patient_id: 2,
  },
  {
    progressnotes: 'No weight Loss',
    evaluationandplan: 'Follow the Blood Work every 3 months',
    prescriptiondetails: 'Mesalmine 25mg',
    patient_id: 3,
  },
];
const seedHealthDetails = async () => {
  try {
    await HealthDetails.bulkCreate(healthData);
    console.log('Health Details were seeded!');
  } catch (error) {
    console.error('Error with seeding health details', error);
  }
};
module.exports = seedHealthDetails;
