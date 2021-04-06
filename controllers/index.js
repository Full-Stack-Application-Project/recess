const router = require('express').Router();

const apiRoutes = require('./api/');
const hbsRoutes = require('./hbs/hbs-routes');
router.use('/api', apiRoutes);

router.use('/', hbsRoutes);

router.get('/', (req, res) => res.redirect("/home"));

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
