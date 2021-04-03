const router = require("express").Router();
// const sequelize = require('../../config/connection');
const { User, Schedule } = require("../../models");
// const withAuth = require('../../utils/auth');

router.get("/", (req, res) => {
  Schedule.findAll({
    attributes: [
      "id",
      "day",
      "working",
      "work_start",
      "work_end",
      "sleep_start",
      "sleep_end",
      "user_id"
    ]
    // ,
    // include: [
    //   {
    //     model: User,
    //     attributes: ["user_email"],
    //   },
    // ]
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Schedule.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "day",
      "working",
      "work_start",
      "work_end",
      "sleep_start",
      "sleep_end",
      "user_id",
    ]
    // ,
    // include: [
    //   {
    //     model: User,
    //     attributes: ["user_email"],
    //   },
    // ],
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
  Schedule.create({
    day: req.body.day,
    working: req.body.working,
    work_start: req.body.work_start,
    work_end: req.body.work_end,
    sleep_start: req.body.sleep_start,
    sleep_end: req.body.sleep_end,
    user_id: req.body.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Schedule.update(
    {
      day: req.body.day,
      working: req.body.working,
      work_start: req.body.work_start,
      work_end: req.body.work_end,
      sleep_start: req.body.sleep_start,
      sleep_end: req.body.sleep_end,
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
  Schedule.destroy({
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
