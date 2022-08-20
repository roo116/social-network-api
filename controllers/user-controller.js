const { User, Thought } = require("../models");

const userController = {
  getAllUser(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch(err => res.json(err));
  },
};



module.exports = userController;
