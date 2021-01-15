const router = require("express").Router();
const auth = require("../middleware/auth");
const { rentAdPost } = require("../controllers/rentAdController");

router.post("/rent", rentAdPost);

module.exports = router;
