const router = require('express').Router();
const signupRoutes = require("./signup-route");

router.use("/users",signupRoutes );

module.exports = router;