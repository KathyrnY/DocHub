const router = require('express').Router();
const homePageroutes = require('./homePageroutes');
const chartRoute = require('./patientChartRoute');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/chart', chartRoute);
router.use('/users', homePageroutes);
router.use('/newpatient', dashboardRoutes);

module.exports = router;
