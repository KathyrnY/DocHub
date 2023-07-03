const router = require('express').Router();
const PatientDetails = require('../../models/PatientDetails');
const HealthDetailsEXT = require('../../models/HealthDetailsEXT');
const HealthDetails = require('../../models/HealthDetails');
const TestResults = require('../../models/TestResults');
// const Comment = require('../../models/Comments');

router.get('/:id', async (req, res) => {
    try {
      const chartData = await PatientDetails.findByPk(req.params.id, {
        include: [
        { model: HealthDetailsEXT},
        { model: HealthDetails},
        { model: TestResults},

        ]
      });
      const healthExtData = chartData.get({ plain: true });
      const healthData = chartData.get({ plain: true });
      const testResultsData = chartData.get({ plain: true });

      console.log('Health Details Ext:', healthExtData);
      console.log('Health Details:', healthData);
      console.log('Text Results:', testResultsData);
      res.render('chart', {
        healthExtData,
        healthData,
        testResultsData
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not retrieve get route data ' });
    }
  });

  module.exports = router;