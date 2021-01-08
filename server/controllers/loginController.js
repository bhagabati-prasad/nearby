const bcrypt = require("bcrypt");
const User = require("../models/User");

// @route GET /api/login
module.exports.loginGet = (req, res) => {
  res.send({ isLoggedIn: true, user: req.user });
};

// @route POST /api/login
module.exports.loginPost = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRes = await User.findOne({ email });
    if (userRes) {
      const isMatched = await bcrypt.compare(password, userRes.password);
      if (isMatched) {
        // create token
        const token = await userRes.generateToken();
        res.cookie("user", token, {
          maxAge: 60 * 60 * 24 * 1000,
          httpOnly: true,
        });
        // secure: false,
        console.log(userRes);
        res.status(200).json(userRes);
      } else {
        console.log("password error");
        res.send({ message: "password error" });
      }
    } else {
      console.log("user doesn't exist");
      res.send({ message: "user doesn't exist" });
    }
  } catch (error) {
    console.log("error: ", error);
    res.json({ error });
  }
};
