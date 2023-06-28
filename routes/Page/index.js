const router = require('express').Router();

const dashboardRoutes = require('./dashboard-route')

router.use('/dashboard', dashboardRoutes);

module.exports = router;