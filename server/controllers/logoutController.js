module.exports.logout_one = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (elem) => elem.token !== req.token
    );
    res.clearCookie("user");
    await req.user.save();
    res.send("logout");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.logout_all = async (req, res) => {
  try {
    req.user.tokens = [];
    res.clearCookie("user");
    await req.user.save();
    res.send("logout");
  } catch (error) {
    res.status(500).send(error);
  }
};
