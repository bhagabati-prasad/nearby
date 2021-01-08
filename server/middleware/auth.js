const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    // const reqToken = req.headers["x-access-token"];
    const reqToken = req.cookies.user;
    if (!reqToken) {
      res.send("you need a token");
    } else {
      const decoded = jwt.verify(reqToken, process.env.SECRET_TOKEN);
      const user = await User.findOne({ _id: decoded._id });
      // console.log(user);
      req.user = user;
      req.token = reqToken;
      next();
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = auth;
