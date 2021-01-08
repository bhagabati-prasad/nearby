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

// {
//   _id: 5fe75a7ab78a4323d0c7d07e,
//   firstName: 'verwavrwe',
//   lastName: 'awvrttwe',
//   email: 'tryujsyaqwf',
//   phone: 123454312,
//   password: '$2b$10$.rIGkf1bZ4uM3EHv169g5uR7QykA5I9ljFZzgBEEWl8.xP.sukQ02',
//   tokens: [
//     {
//       _id: 5fe75a7ab78a4323d0c7d07f,
//       token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmU3NWE3YWI3OGE0MzIzZDBjN2QwN2UiLCJpYXQiOjE2MDg5OTc0OTh9.L2MdLi_1j97u5PMTSCs65LNnE1DSDHmKn06rzQRA9_s'
//     }
//   ],
//   __v: 0
// }
