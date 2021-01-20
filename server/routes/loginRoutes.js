const router = require("express").Router();
const { isLoggedIn, loginPost } = require("../controllers/loginController");
const auth = require("../middleware/auth");

router.post("/isLoggedIn", auth, isLoggedIn);
router.post("/", loginPost);

module.exports = router;
