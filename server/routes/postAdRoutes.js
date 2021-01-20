const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  rentAdPost,
  serviceAdPost,
} = require("../controllers/postAdController");

router.post("/rent", auth, rentAdPost);
router.post("/service", auth, serviceAdPost);

module.exports = router;
