const bcrypt = require("bcrypt");
const User = require("../models/User");

// @route POST /api/login/isLoggedIn
module.exports.isLoggedIn = (req, res) => {
  // const token = req.headers["x-access-token"];
  // console.log(token);
  res.json({
    isLoggedIn: req.isLoggedIn,
    user: req.user,
    token: req.userToken,
  });
};

// @route POST /api/login
module.exports.loginPost = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRes = await User.findOne({ email });
    if (userRes) {
      const isMatched = await bcrypt.compare(password, userRes.password);
      if (isMatched) {
        console.log(userRes);
        const token = await userRes.generateToken();
        res.status(200).json({ isLoggedIn: true, user: userRes, token });
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
    res.status(500).json({ error });
  }
};
