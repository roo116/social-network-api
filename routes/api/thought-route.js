const router = require("express").Router();
const { getAllThought } = require("../../controllers/thought-controller");

// api/thoughts
router.route("/").get(getAllThought);

module.exports = router;
