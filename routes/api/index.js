const router = require('express').Router();
const homePageroutes = require("./homePageroutes");
const chartRoute = require('./patientChartRoute');

router.use("/chart", chartRoute);
router.use("/users",homePageroutes );


module.exports = router;