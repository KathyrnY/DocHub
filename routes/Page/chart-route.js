const router = require('express').Router();
const PatientDetails = require('../../models/PatientDetails');
const HealthDetailsEXT = require('../../models/HealthDetailsEXT');
const HealthDetails = require('../../models/HealthDetails');
const TestResults = require('../../models/TestResults');
const Comment = require('../../models/Comments');

router.get('/:id', async (req, res) => {
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

module.exports = router;
