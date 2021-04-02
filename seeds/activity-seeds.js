const { Activity } = require("../models");

const ActivityData = [
  {
    id: 1,
    activity_category: "Exercise",
    activity_name: "Run",
    activity_length: 1.5,
    user_id: 28,
  },
];

const seedActivities = () => Activity.bulkCreate(ActivityData);

module.exports = seedActivities;
