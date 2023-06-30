const router = require('express').Router();
const { Op } = require('sequelize');
const { DateTime } = require('luxon');
const PatientDetails = require('../../models/PatientDetails');

//Displays doctor's dashboard with upcoming patients
router.get('/', async (req, res) => {
  try {
    const todayDate = DateTime.now().toFormat('yyyy-MM-dd');
    const currentTime = DateTime.now().toLocaleString(
      DateTime.TIME_24_WITH_LONG_OFFSET
    );

    const patientDetails = await PatientDetails.findAll({
      where: {
        doctor_id: req.session.user_id,
        appt_date: todayDate,
        appt_time: { [Op.gte]: currentTime },
      },
    });

    const patientData = patientDetails.map((data) => data.get({ plain: true }));

    patientData.forEach((data) => {
      const dateinTformat = DateTime.fromISO(`${todayDate}T${data.appt_time}`);
      const time = dateinTformat.toLocaleString(DateTime.TIME_SIMPLE);
      data.appttime = time;
    });

    res.render('dashboard', { patientData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
