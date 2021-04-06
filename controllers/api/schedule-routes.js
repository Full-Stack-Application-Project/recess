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
      "work_start_hour",
      "work_start_minute",
      "work_end_hour",
      "work_end_minute",
      "sleep_start_hour",
      "sleep_start_minute",
      "sleep_end_hour",
      "sleep_end_minute",
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
      "work_start_hour",
      "work_start_minute",
      "work_end_hour",
      "work_end_minute",
      "sleep_start_hour",
      "sleep_start_minute",
      "sleep_end_hour",
      "sleep_end_minute",
      "user_id"
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
    work_start_hour: req.body.work_start_hour,
    work_start_minute: req.body.work_start_minute,
    work_end_hour: req.body.work_end_hour,
    work_end_minute: req.body.work_end_minute,
    sleep_start_hour: req.body.sleep_start_hour,
    sleep_start_minute: req.body.sleep_start_minute,
    sleep_end_hour: req.body.sleep_end_hour,
    sleep_end_minute: req.body.sleep_end_minute,
    user_id: req.body.user_id
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
    work_start_hour: req.body.work_start_hour,
    work_start_minute: req.body.work_start_minute,
    work_end_hour: req.body.work_end_hour,
    work_end_minute: req.body.work_end_minute,
    sleep_start_hour: req.body.sleep_start_hour,
    sleep_start_minute: req.body.sleep_start_minute,
    sleep_end_hour: req.body.sleep_end_hour,
    sleep_end_minute: req.body.sleep_end_minute,
    user_id: req.body.user_id
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
