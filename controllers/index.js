const router = require('express').Router();

const apiRoutes = require('./api/');
<<<<<<< HEAD
const homeRoutes = require('./home-routes.js')

router.use('/', homeRoutes);
=======
const hbsRoutes = require('./hbs/hbs-routes');
>>>>>>> 3e8fe18c97304170a0cba4906db959488186bf91
router.use('/api', apiRoutes);

router.use('/', hbsRoutes);

router.get('/', (req, res) => res.redirect("/home"));

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
