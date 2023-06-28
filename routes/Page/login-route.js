const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.get("/login", (req, res) => {
    res.render("login");
});

// Post route for login submission with added auth
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.render("login", { error: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.render("login", { error: "Invalid username or password" });
    }

    req.session.user = user; 
    res.redirect("/dashboard"); 
  } catch (err) {
    console.error(err);
     res.status(500).send("Internal Server Error");
  }
});

module.exports = router;