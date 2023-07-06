const router = require('express').Router();
const { PatientDetails, HealthDetailsEXT } = require('../../models');
const withAuth = require('../../utils/auth');

//CREATES New Patient Info
router.post('/', withAuth, async (req, res) => {
  try {
    const patientDetails = await PatientDetails.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      gender: req.body.gender,
      age: req.body.age,
      race: req.body.race,
      insurancename: req.body.insuranceName,
      occupation: req.body.occupation,
      address: req.body.address,
      phoneno: req.body.phoneNo,
      doctor_id: req.session.user_id,
    });

    if (req.body.healthDetailsextTable.length > 0) {
      const healthDetailsExt = req.body.healthDetailsextTable;
      healthDetailsExt.forEach((data) => {
        data.patient_id = patientDetails.id;
      });

      const healthDetails = await HealthDetailsEXT.bulkCreate(
        req.body.healthDetailsextTable
      );
    }
    res.status(200).json({ message: 'Patient details created Succefully' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
