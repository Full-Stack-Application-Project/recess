const { Schedule } = require("../models");

const scheduleData = [
  {
    id: 2,
    day: "Monday",
    working: "yes",
    work_start: 0800,
    work_end: 0500,
    sleep_start: 2215,
    sleep_end: 0600,
    user_id: 1
  },
  { id: 3,
    day: "Tuesday",
    working: "yes",
    work_start: 0800,
    work_end: 0500,
    sleep_start: 2215,
    sleep_end: 0600,
    user_id: 1
  },
  {
    id: 4,
    day: "Wednesday",
    working: "yes",
    work_start: 0800,
    work_end: 0500,
    sleep_start: 2215,
    sleep_end: 0600,
    user_id: 1
  },
  {
    id: 5,
    day: "Thursday",
    working: "yes",
    work_start: 0800,
    work_end: 0500,
    sleep_start: 2215,
    sleep_end: 0600,
    user_id: 1
  },
  {
    id: 6,
    day: "Friday",
    working: "yes",
    work_start: 0800,
    work_end: 0500,
    sleep_start: 2215,
    sleep_end: 0600,
    user_id: 1
  },
  {
    id: 7,
    day: "Saturday",
    working: "no",
    work_start: null,
    work_end: null,
    sleep_start: 2245,
    sleep_end: 0645,
    user_id: 1
  },
  { id: 1,
    day: "Sunday",
    working: "no",
    work_start: null,
    work_end: null,
    sleep_start: 2245,
    sleep_end: 0645,
    user_id: 1
  }
];

const seedSchedule = () => Schedule.bulkCreate(scheduleData);

module.exports = seedSchedule;