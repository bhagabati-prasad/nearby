const router = require("express").Router();
const { logout_one, logout_all } = require("../controllers/logoutController");
const auth = require("../middleware/auth");

router.get("/", auth, logout_one);
router.get("/", auth, logout_all);

module.exports = router;
