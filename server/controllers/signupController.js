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
    // set token in cookie
    res.cookie("user", token, {
      maxAge: 60 * 60 * 24 * 1000,
      httpOnly: true,
    });
    // secure: false,
    // create new user
    const registered = await registerUser.save();
    console.log("user registered ", registered);
    res.status(200).json(registered);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
