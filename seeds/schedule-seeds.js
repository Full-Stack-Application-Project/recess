const { Schedule } = require("../models");

const scheduleData = [
  {
    day: "Monday",
    working: "yes",
    work_start_hour: 8,
    work_start_minute: 0,
    work_end_hour: 5,
    work_end_minute: 0,
    sleep_start_hour: 22,
    sleep_start_minute: 30,
    sleep_end_hour: 6,
    sleep_end_minute: 15
  },
  {
    day: "Tuesday",
    working: "yes",
    work_start_hour: 8,
    work_start_minute: 0,
    work_end_hour: 5,
    work_end_minute: 0,
    sleep_start_hour: 22,
    sleep_start_minute: 30,
    sleep_end_hour: 6,
    sleep_end_minute: 15
  },
  {
    day: "Wednesday",
    working: "yes",
    work_start_hour: 8,
    work_start_minute: 0,
    work_end_hour: 5,
    work_end_minute: 0,
    sleep_start_hour: 22,
    sleep_start_minute: 30,
    sleep_end_hour: 6,
    sleep_end_minute: 15
  },
  {
    day: "Thursday",
    working: "yes",
    work_start_hour: 8,
    work_start_minute: 0,
    work_end_hour: 5,
    work_end_minute: 0,
    sleep_start_hour: 22,
    sleep_start_minute: 30,
    sleep_end_hour: 6,
    sleep_end_minute: 15
  },
  {
    day: "Friday",
    working: "yes",
    work_start_hour: 8,
    work_start_minute: 0,
    work_end_hour: 5,
    work_end_minute: 0,
    sleep_start_hour: 22,
    sleep_start_minute: 30,
    sleep_end_hour: 6,
    sleep_end_minute: 15
  },
  {
    day: "Saturday",
    working: "no",
    work_start_hour: null,
    work_start_minute: null,
    work_end_hour: null,
    work_end_minute: null,
    sleep_start_hour: 22,
    sleep_start_minute: 45,
    sleep_end_hour: 6,
    sleep_end_minute: 45
  },
  {
    day: "Sunday",
    working: "no",
    work_start_hour: null,
    work_start_minute: null,
    work_end_hour: null,
    work_end_minute: null,
    sleep_start_hour: 22,
    sleep_start_minute: 45,
    sleep_end_hour: 6,
    sleep_end_minute: 45
  }
];

const seedSchedule = () => Schedule.bulkCreate(scheduleData);

module.exports = seedSchedule;
