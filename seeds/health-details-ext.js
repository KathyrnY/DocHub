const { HealthDetailsEXT } = require("../models");

const healthDataExt = [
    {
        condition: "Type 1 Diabetes",
        allergies: "Seafood",
        patient_id: 1,
    },
    {
        condition: "Type 2 Diabetes",
        allergies: "NSAIDS",
        patient_id: 3,
    },
    {
        condition: "n/a",
        allergies: "Pencillian",
        patient_id: 2,
    },
]

const seedHealthDetailsEXT = async () => {
    await HealthDetailsEXT.sync({ force: true });
    try {
      await Promise.all(healthDataExt.map((data) => HealthDetailsEXT.create(data)));
      console.log('Health Data EXT Seeded!');
    } catch (err) {
      console.error('Error in seeding', err);
    }
  };
seedHealthDetailsEXT();