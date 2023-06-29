const { TestResults } = require("../models");

const testData = [
    {
        testname: "Blood Test",
        testresults: "abnormal",
        doctorscomments: "High WBC",
        patient_id: 1,
    },
    {
        testname: "Urine Test",
        testresults: "Normal",
        doctorscomments: "",
        patient_id: 3,

    },
    {
        testname: "X-Ray",
        testresults: "n/a",
        doctorscomments: "",
        patient_id: 2,
    },
]

const seedTestResults = async () => {
  try {
    await TestResults.bulkCreate(testData);
    console.log('Test results were seeded!');
  } catch (error) {
    console.error('Error with seeding test results', error);
  }
    // await TestResults.sync({ force: true });
    // try {
    //   await Promise.all(testData.map((data) => TestResults.create(data)));
    // //   Create- This will allow text entered into a form to be inserted into the database
    //   console.log('Test Results Seeded!');
    // } catch (err) {
    //   console.error('Error in seeding', err);
    // }
  };
  
  module.exports = seedTestResults;