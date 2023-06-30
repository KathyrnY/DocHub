const router = require('express').Router();
// const bcrypt = require('bcrypt');
const User = require('../../models/User');

router.get('/', (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});



module.exports = router;
