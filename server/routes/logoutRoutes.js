const router = require("express").Router();
const { logout_this, logout_all } = require("../controllers/logoutController");
const auth = require("../middleware/auth");

router.post("/this", auth, logout_this);
router.post("/all", auth, logout_all);

module.exports = router;
