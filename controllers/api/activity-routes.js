const router = require("express").Router();
const { User, Activity } = require("../../models");
// const sequelize = require("../../config/connection");
// const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Activity.findAll({
    attributes: [
      "id",
      "activity_category",
      "activity_name",
      "activity_length",
      "user_id",
    ],
    include: [
      {
        model: User,
        attributes: ["user_email"],
      },
    ],
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

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
    include: [
      {
        model: User,
        attributes: ["user_email"],
      },
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

router.post("/", (req, res) => {
  Activity.create({
    activity_category: req.body.activity_category,
    activity_name: req.body.actrivity_name,
    activity_length: req.session.activity_length,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Activity.update(
    {
      activity_category: req.body.activity_category,
      activity_name: req.body.actrivity_name,
      activity_length: req.session.activity_length,
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

router.delete("/:id", (req, res) => {
  console.log("id", req.params.id);
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
