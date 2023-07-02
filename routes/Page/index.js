const router = require('express').Router();

const chartRoute = require('./chart-route');
const dashboardRoutes = require('./dashboard-route');
const signupRoute = require('./signup-route');
const loginRoute = require('./login-route')

router.use('/chart', chartRoute);
router.use('/dashboard', dashboardRoutes);
router.use('/signup', signupRoute);
router.use('/', loginRoute);

module.exports = router;
