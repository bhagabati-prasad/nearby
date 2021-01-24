const User = require("../models/User");

// @route POST /api/signup
module.exports.signupPost = async (req, res) => {
  try {
    const registerUser = new User({
      firstName: req.body.fname,
      lastName: req.body.lname,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });

    // create token
    const token = await registerUser.generateToken();
    // create new user
    const registeredUser = await registerUser.save();
    console.log("user registered ", registeredUser);
    res.status(200).json({ isLoggedIn: true, user: registeredUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
