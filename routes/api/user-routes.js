const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUser).post(createUser);

// router.route("/:userid/friends/:friendid") similar for thoughts.

router.route("/:id").get(getUserById).put(updateUser);

module.exports = router;
