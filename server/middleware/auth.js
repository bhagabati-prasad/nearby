const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    const reqToken = req.headers["x-access-token"];
    if (!reqToken) {
      res.json({ isLoggedIn: false, error: "no authentication token found" });
    } else {
      const decoded = jwt.verify(reqToken, process.env.SECRET_TOKEN);
      if (!decoded) {
        res.json({ isLoggedIn: false, error: "token verification failed" });
      } else {
        const user = await User.findOne({ _id: decoded._id });
        req.isLoggedIn = true;
        req.user = user;
        req.userToken = reqToken;
        req.userId = user._id;
        next();
      }
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = auth;
