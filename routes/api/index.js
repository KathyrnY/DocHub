const router = require('express').Router();
const loginRoutes = require("../Page/login-route");

router.use("/login", loginRoutes);

module.exports = router;