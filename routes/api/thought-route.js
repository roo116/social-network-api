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
router.route("/").get(getAllThought)

router.route("/:userId").post(addThought)

router.route("/:id").get(getThoughtById).delete(removeThought)

router.route("/:thoughtId/reactions").post(addReaction)

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);


module.exports = router;
