const router = require("express").Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction,
  } = require("../../controllers/thought-controller");

// api/thoughts
router.route("/").get(getAllThought);

router.route("/:id").get(getThoughtById).post(addThought);

router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

router.route("/:userId/:throughtId/:reactionId").delete(removeReaction);


module.exports = router;
