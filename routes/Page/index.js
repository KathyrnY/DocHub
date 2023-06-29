const router = require('express').Router();

const dashboardRoutes = require('./dashboard-route');
const signupRoute = require('./signup-route');

router.use('/dashboard', dashboardRoutes);
router.use('/signup', signupRoute);

module.exports = router;
