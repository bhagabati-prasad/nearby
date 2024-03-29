module.exports.logout_this = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (elem) => elem.token !== req.token
    );
    res.clearCookie("user");
    await req.user.save();
    res.status(200).json({
      isLoggedIn: false,
      user: "logged out from this device",
      token: "",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports.logout_all = async (req, res) => {
  try {
    req.user.tokens = [];
    res.clearCookie("user");
    await req.user.save();
    res.status(200).json({
      isLoggedIn: false,
      user: "logged out from all devices",
      token: "",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
