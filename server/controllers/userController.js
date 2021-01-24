const User = require("../models/User");

module.exports.updateUser = async (req, res) => {
  try {
    const _id = req.headers["user-id"];
    const data = { ...req.body.info, address: { ...req.body.address } };
    const updateUser = await User.findByIdAndUpdate(_id, data, {
      new: true,
    });
    res.json({ isLoggedIn: true, user: updateUser });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.userId);
    res.json({ status: true, deleteUser });
  } catch (error) {
    res.status(500).send(error);
  }
};
