const router = require('express').Router();
const homePageroutes = require('./homePageroutes');
const chartRoute = require('./patientChartRoute');
const dashboardRoutes = require('./dashboardRoutes');
const commentRoute = require('./commentRoute');

router.use('/chart', chartRoute);
router.use('/users', homePageroutes);
router.use('/newpatient', dashboardRoutes);
router.use('/comment', commentRoute);

module.exports = router;
