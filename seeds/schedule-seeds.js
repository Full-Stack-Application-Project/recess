const { Schedule } = require("../models");

const scheduleData = [
  {
    id: 1,
    day: "Monday",
    working: "yes",
    work_start: "8:00 AM",
    work_end: "5:00 PM",
    sleep_start: "9:00 PM",
    sleep_end: "6:00 AM",
  },
];

const seedSchedule = () => Schedule.bulkCreate(scheduleData);

module.exports = seedSchedule;
