const { Physician } = require("../models")

const physicianData = [
    {
        first_name: "Kathy",
        last_name: "Long",
        email: "kathy.long@dochub.com",
        password: "",
        npi: "1224563780",
    },
    {
        first_name: "Wassim",
        last_name: "Samra",
        email: "wassim.samra@dochub.com",
        password: "",
        npi: "5466789955",
    },
    {
        first_name: "Miranda",
        last_name: "Diaz",
        email: "miranda.diaz@dochub.com",
        password: "",
        npi: "3356722334",
    }
]
const seedPhysician = async () => {
    try {
      await Physician.bulkCreate(physicianData);
      console.log("Physicians were seeded!");
    } catch (error) {
      console.error("Error with seeding physicians", error);
    }
  };
  
  module.exports = seedPhysician;