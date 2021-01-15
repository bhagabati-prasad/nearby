const router = require("express").Router();
const { logout_this, logout_all } = require("../controllers/logoutController");
const auth = require("../middleware/auth");

router.get("/this", auth, logout_this);
router.get("/all", auth, logout_all);

module.exports = router;
