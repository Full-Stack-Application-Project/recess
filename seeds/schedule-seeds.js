const { Schedule } = require("../models");

const scheduleData = [
  {
    day: "Monday",
    working: "yes",
    work_start: 8,
    work_end: 5,
    sleep_start: 22,
    sleep_end: 6,
  },
  {
    day: "Tuesday",
    working: "yes",
    work_start: 8,
    work_end: 5,
    sleep_start: 22,
    sleep_end: 6,
  },
  {
    day: "Wednesday",
    working: "yes",
    work_start: 8,
    work_end: 5,
    sleep_start: 22,
    sleep_end: 6,
  },
  {
    day: "Thursday",
    working: "yes",
    work_start: 8,
    work_end: 5,
    sleep_start: 22,
    sleep_end: 6,
  },
  {
    day: "Friday",
    working: "yes",
    work_start: 8,
    work_end: 5,
    sleep_start: 22,
    sleep_end: 6,
  },
  {
    day: "Saturday",
    working: "no",
    work_start: 8,
    work_end: 5,
    sleep_start: 23,
    sleep_end: 7,
  },
  {
    day: "Sunday",
    working: "no",
    work_start: 8,
    work_end: 5,
    sleep_start: 24,
    sleep_end: 8,
  }
];

const seedSchedule = () => Schedule.bulkCreate(scheduleData);

module.exports = seedSchedule;
