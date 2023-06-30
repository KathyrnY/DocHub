const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });
    console.log(dbUserData);

    req.session.save(() => {
      req.session.user_id = dbUserData.dataValues.id;
      req.session.username = dbUserData.dataValues.username;
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Post route for login submission with added auth
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.render('login', { error: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.render('login', { error: 'Invalid username or password' });
    }
    // This will save the username and user id in the session
    req.session.username = user.username;
    req.session.user_id = user.dataValues.id;

    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/logout', (req, res) => {
  console.log('inside logout route');
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
