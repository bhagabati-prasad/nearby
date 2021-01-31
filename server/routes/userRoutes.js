const router = require("express").Router();
const {
  uploadProfilePicture,
  updateProfilePicture,
  deleteProfilePicture,
} = require("../controllers/profilePictureController");
const { updateUser, deleteUser } = require("../controllers/userController");

// not in use now -------
router.patch("/upload/picture/:id", uploadProfilePicture);
// -------

router.patch("/update/picture/:id", updateProfilePicture);
router.delete("/delete/picture/:id", deleteProfilePicture);

router.patch("/update/info", updateUser);
router.delete("/delete/user/:id", deleteUser);

module.exports = router;
