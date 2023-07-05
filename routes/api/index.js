const router = require('express').Router();
const homePageroutes = require('./homePageroutes');
const dashboardRoutes = require('./dashboardAPIroutes');
const commentRoute = require('./commentRoute');

router.use('/users', homePageroutes);
router.use('/newpatient', dashboardRoutes);
router.use('/chart', commentRoute);

module.exports = router;
