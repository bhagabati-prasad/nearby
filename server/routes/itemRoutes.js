const router = require("express").Router();
const { getItem } = require("../controllers/itemController");
const auth = require("../middleware/auth");

router.post("/", auth, getItem);

module.exports = router;
