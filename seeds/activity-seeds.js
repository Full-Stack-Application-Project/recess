const { Activity } = require("../models");

const ActivityData = [
  {
    activity_category: "Exercise",
    activity_name: "Run",
    activity_length: 1,
    user_id: 1
  },
  {
    activity_category: "Exercise",
    activity_name: "Walk",
    activity_length: 1,
    user_id: 1
  },
  {
    activity_category: "Exercise",
    activity_name: "Yoga",
    activity_length: 1,
    user_id: 1
  },
  {
    activity_category: "Relaxation",
    activity_name: "Read",
    activity_length: 1.5,
    user_id: 1
  },
  {
    activity_category: "Relaxation",
    activity_name: "Meditate",
    activity_length: 1.5,
    user_id: 1
  },
  {
    activity_category: "Relaxation",
    activity_name: "Watch TV",
    activity_length: 1.5,
    user_id: 1
  },
  {
    activity_category: "Academics",
    activity_name: "Practice Algorithms",
    activity_length: 2,
    user_id: 1
  },
  {
    activity_category: "Academics",
    activity_name: "Watch Youtube Videos",
    activity_length: 2,
    user_id: 1
  },
  {
    activity_category: "Academics",
    activity_name: "Work on Project",
    activity_length: 2,
    user_id: 1
  },
];

const seedActivities = () => Activity.bulkCreate(ActivityData);

module.exports = seedActivities;
