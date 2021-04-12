const router = require("express").Router();
const sequelize = require('../../config/connection');
const { User, Schedule } = require("../../models");
const withAuth = require('../../utils/auth');

// get all the schedules in the schedule table
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
      "user_id",
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a schedule with a specific id
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

// add a schedule to the schedule table
router.post("/", withAuth, (req, res) => {
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

// edit a schedule with a specific id
router.put("/:id", withAuth, (req, res) => {
  Schedule.update(
    {
      day: req.body.day,
      working: req.body.working,
      work_start: req.body.work_start,
      work_end: req.body.work_end,
      sleep_start: req.body.sleep_start,
      sleep_end: req.body.sleep_end,
      user_id: req.body.user_id,
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

// delete a schedule with a specific id
router.delete("/", (req, res) => {
  Schedule.destroy({
    where: {},
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
