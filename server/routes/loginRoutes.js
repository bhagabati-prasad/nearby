const router = require("express").Router();
const { loginGet, loginPost } = require("../controllers/loginController");
const auth = require("../middleware/auth");

router.get("/", auth, loginGet);
router.post("/", loginPost);

module.exports = router;
