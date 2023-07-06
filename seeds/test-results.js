const { TestResults } = require('../models');

const testData = [
  {
    testname: 'Blood Test',
    testresults: 'abnormal',
    doctorscomments: 'High WBC',
    patient_id: 1,
  },
  {
    testname: 'Urine Test',
    testresults: 'Normal',
    doctorscomments: '',
    patient_id: 3,
  },
  {
    testname: 'X-Ray',
    testresults: 'n/a',
    doctorscomments: '',
    patient_id: 2,
  },
];

const seedTestResults = async () => {
  try {
    await TestResults.bulkCreate(testData);
    console.log('Test results were seeded!');
  } catch (error) {
    console.error('Error with seeding test results', error);
  }
};

module.exports = seedTestResults;
