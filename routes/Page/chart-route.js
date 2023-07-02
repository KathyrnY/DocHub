const router = require('express').Router();
const PatientDetails = require('../../models/PatientDetails');
const HealthDetailsEXT = require('../../models/HealthDetailsEXT');
const HealthDetails = require('../../models/HealthDetails');
const TestResults = require('../../models/TestResults');

router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const patient = await PatientDetails.findByPk(id);
  
      if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
      }
  
      const healthDetailsExt = await HealthDetailsEXT.findAll({
        where: { patient_id: id },
      });
      const healthDetails = await HealthDetails.findAll({
        where: { patient_id: id },
      });
      const testResults = await TestResults.findAll({
        where: { patient_id: id },
      });
  
      res.render('chart', {
        patient,
        healthDetailsExt,
        healthDetails,
        testResults,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not retrieve Get route data ' });
    }
  });

  module.exports = router;