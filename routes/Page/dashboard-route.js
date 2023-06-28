const router = require('express').Router();
const { DateTime } = require('luxon');
const PatientDetails = require('../../models/PatientDetails');

//Displays doctor's dashboard with upcoming patients
router.get('/', async (req, res) => {
  try {
    // console.log('ldate:>>>>>', DateTime.now().toFormat('yyyy-MM-dd'));
    // console.log(
    //   'time_simple>>>',
    //   DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)
    // );

    const todayDate = DateTime.now().toFormat('yyyy-MM-dd');
    console.log(todayDate);
    const patientDetails = await PatientDetails.findAll({
      where: {
        doctor_id: 1,
        appt_date_time: todayDate,
      },
    });

    const patientData = patientDetails.map((data) => data.get({ plain: true }));
    res.render('dashboard', { patientData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
