const router = require("express").Router();
const { signupPost } = require("../controllers/signupController");

router.post("/", signupPost);

module.exports = router;
