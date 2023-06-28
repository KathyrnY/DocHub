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
        testResults: "Normal",
        doctorscomments: "",
        patient_id: 3,

    },
    {
        testname: "X-Ray",
        testResults: "n/a",
        doctorscomments: "",
        patient_id: 2,
    }
]

const seedTestResults = async () => {
    await TestResults.sync({ force: true });
    try {
      await Promise.all(testData.map((data) => TestResults.create(data)));
    //   Create- This will allow text entered into a form to be inserted into the database
      console.log('Test Results Seeded!');
    } catch (err) {
      console.error('Error in seeding', err);
    }
  };
  
  seedTestResults();