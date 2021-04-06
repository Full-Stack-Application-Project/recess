const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use('/', hbsRoutes);

router.get('/', (req, res) => res.redirect("/home"));

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
