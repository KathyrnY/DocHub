const router = require('express').Router();
const homePageroutes = require("./homePageroutes");
const chartRoute = require('./patientChartRoute');
const commentRoute = require('./commentRoute');

router.use('/comment', commentRoute);
router.use("/chart", chartRoute);
router.use("/users",homePageroutes );


module.exports = router;