const router = require('express').Router();
const { PatientDetails, HealthDetailsEXT, TestResults, HealthDetails } = require('../../models');

router.post('/chart', async (req, res) => {
  try {
    const { patientId } = req.body;

    const patientChart = await PatientDetails.findByPk(patientId, {
      include: [
        {
          model: HealthDetails,
        },
        {
          model: HealthDetailsEXT,
        },
        {
          model: TestResults,
        },
      ],
    });

    res.render('chart', { patientChart });
  } catch (error) {
    console.error('Error fetching patient data for chart', error);
    res.status(500).send('Chart post route issue');
  }
});
module.exports = router;