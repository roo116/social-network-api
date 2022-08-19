const { User, Thought } = require("../models");

const thoughtController = {
  getAllThought(req, res) {
    Thought.find({})
      .then((dbThoughtData) => {
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },





};



module.exports = thoughtController;
