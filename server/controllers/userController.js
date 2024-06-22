const User = require("../models/User");
const cloudinary = require("../utils/cloudinary");

// @PATCH /api/user/update/info
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

// @DELETE /api/user/delete/user/:id
module.exports.deleteUser = async (req, res) => {
  try {
    // find user by id
    let user = await User.findById(req.params.id);
    //delete image from cloudinry
    await cloudinary.uploader.destroy(user.cloudinary_id);
    // delete user
    await user.remove();
    res.json({ status: true, isLoggedIn: false });
  } catch (error) {
    res.status(500).send(error);
  }
};
