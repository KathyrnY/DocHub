const router = require('express').Router();
const { Op } = require('sequelize');
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
    const time = '02:30 PM';
    const formatedTime = DateTime.fromFormat(time, 'hh:mm a').toFormat(
      'HH:MM:00'
    );
    console.log(DateTime.fromFormat(time, 'hh:mm a').toFormat('HH:MM:00'));
    const todayDate = DateTime.now().toFormat('yyyy-MM-dd');
    console.log(todayDate);
    const currentTime = DateTime.now().toLocaleString(
      DateTime.TIME_24_WITH_LONG_OFFSET
    );
    const date = DateTime.fromISO(`${todayDate}T${formatedTime}`);
    const humanReadable = date.toLocaleString(DateTime.TIME_SIMPLE);
    console.log(humanReadable);
    console.log(currentTime);
    const patientDetails = await PatientDetails.findAll({
      where: {
        doctor_id: 2,
        appt_date: todayDate,
        appt_time: { [Op.gte]: currentTime },
      },
    });

    const patientData = patientDetails.map((data) => data.get({ plain: true }));
    console.log(patientData);
    res.render('dashboard', { patientData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
