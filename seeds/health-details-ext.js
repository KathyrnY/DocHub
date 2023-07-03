const { HealthDetailsEXT } = require('../models');

const healthDataExt = [
  {
    condition: 'Type 1 Diabetes',
    type: 'knowncondition',
    patient_id: 1,
  },
  {
    condition: 'Type 2 Diabetes',
    type: 'knowncondition',
    patient_id: 2,
  },
  {
    condition: 'Sinusitis',
    type: 'allergies',
    patient_id: 2,
  },
  {
    condition: 'Anaphylaxis',
    type: 'allergies',
    patient_id: 3,
  },
  {
    condition: 'Sinusitis',
    type: 'allergies',
    patient_id: 3,
  },
];

const seedHealthDetailsEXT = async () => {
  try {
    await HealthDetailsEXT.bulkCreate(healthDataExt);
    console.log('Health details EXT were seeded!');
  } catch (error) {
    console.error('Error with seeding physicians', error);
  }
};
//   await HealthDetailsEXT.sync({ force: true });
//   try {
//     await Promise.all(healthDataExt.map((data) => HealthDetailsEXT.create(data)));
//     console.log('Health Data EXT Seeded!');
//   } catch (err) {
//     console.error('Error in seeding', err);
//   }
// };
module.exports = seedHealthDetailsEXT;
