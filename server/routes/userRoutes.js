const router = require("express").Router();
const { updateUser, deleteUser } = require("../controllers/userController");
const auth = require("../middleware/auth");

router.patch("/update", updateUser);
router.delete("/delete", deleteUser);

module.exports = router;
