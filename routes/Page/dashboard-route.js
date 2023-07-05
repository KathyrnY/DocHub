const router = require('express').Router();
const { Op } = require('sequelize');
const { DateTime } = require('luxon');
const {
  PatientDetails,
  HealthDetailsEXT,
  HealthDetails,
  TestResults,
  Comment,
} = require('../../models');

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

    res.render('dashboard', { patientData,});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//displays all patient details
router.get('/all', async (req, res) => {
  try {
    const patientDetails = await PatientDetails.findAll({
      where: {
        doctor_id: req.session.user_id,
      },
    });

    const patientData = patientDetails.map((data) => data.get({ plain: true }));

    patientData.forEach((data) => {
      const dateinTformat = DateTime.fromISO(
        `${data.appt_date}T${data.appt_time}`
      );
      const time = dateinTformat.toLocaleString(DateTime.TIME_SIMPLE);
      data.appttime = time;
    });

    res.render('dashboard', { patientData});} catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//displays individual patient details
router.get('/chart/:id', async (req, res) => {
  try {
    const chartData = await PatientDetails.findByPk(req.params.id, {
      include: [
        { model: HealthDetailsEXT },
        { model: HealthDetails },
        { model: TestResults },
        {
          model: Comment,
          as: 'patient_comments',
          order: [['createdAt', 'DESC']],
          limit: 1,
        },
      ],
    });
    const healthExtData = chartData.get({ plain: true });
    const healthData = chartData.get({ plain: true });
    const testResultsData = chartData.get({ plain: true });
    const commentData = chartData.get({ plain: true });

    res.render('chart', {
      healthExtData,
      healthData,
      testResultsData,
      commentData,

      style: 'chart.css',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not retrieve get route data ' });
  }
});

//displays new patient form
router.get('/new', (req, res) => {
  try {
    res.render('newpatient');
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
