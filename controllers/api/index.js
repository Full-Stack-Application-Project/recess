// initial setup
const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const activityRoutes = require('./activity-routes');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/activities', activityRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
