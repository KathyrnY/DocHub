const router = require('express').Router();
const homePageroutes = require("./homePageroutes");

router.use("/users",homePageroutes );


module.exports = router;