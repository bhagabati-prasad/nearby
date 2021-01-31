const router = require("express").Router();
const { getItem } = require("../controllers/itemController");

router.get("/", getItem);

module.exports = router;
