const router = require('express').Router();
const User = require('../../models/User');

router.get('/', (req, res) => {
  try {
    res.render('signup-page');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
