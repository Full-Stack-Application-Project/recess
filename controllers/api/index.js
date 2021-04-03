// initial setup
const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const activityRoutes = require("./activity-routes");
const scheduleRoutes = require("./schedule-routes");

router.use("/users", userRoutes);
router.use("/activities", activityRoutes);
router.use("/schedules", scheduleRoutes);

router.get('/', (req, res) => res.send('welcome to the api folder'));

module.exports = router;
