const router = require('express').Router();

const apiRoutes = require('./api');
const pageRoutes = require('./Page');

router.use('/api', apiRoutes);
router.use('/', pageRoutes);


module.exports = router;
