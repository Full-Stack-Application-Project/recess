const router = require("express").Router();
const { User, Activity } = require("../../models");
const withAuth = require("../../utils/auth");

// get all activities
router.get("/", (req, res) => {
  Activity.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      "id",
      "activity_category",
      "activity_name",
      "activity_length",
      "user_id",
    ],
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one activity with a specific id
router.get("/:id", (req, res) => {
  Activity.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "activity_category",
      "activity_name",
      "activity_length",
      "user_id",
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add an activity to the activities table
router.post("/", withAuth, (req, res) => {
  Activity.create({
    activity_category: req.body.activity_category,
    activity_name: req.body.activity_name,
    activity_length: req.body.activity_length,
    user_id: req.body.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// edit an activity with a specific id in the activities table
router.put("/:id", withAuth, (req, res) => {
  Activity.update(
    {
      activity_category: req.body.activity_category,
      activity_name: req.body.activity_name,
      activity_length: req.body.activity_length,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete an activity with a specific id
router.delete("/:id", withAuth, (req, res) => {
  Activity.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
