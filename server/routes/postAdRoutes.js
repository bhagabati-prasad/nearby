const router = require("express").Router();
const {
  rentAdPost,
  serviceAdPost,
} = require("../controllers/postAdController");

router.post("/rent", rentAdPost);
router.post("/service", serviceAdPost);

module.exports = router;
