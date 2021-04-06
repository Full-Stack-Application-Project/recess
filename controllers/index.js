const router = require('express').Router();

const apiRoutes = require('./api/');
<<<<<<< HEAD
const hbsRoutes = require('./hbs/hbs-routes');
=======
const homeRoutes = require('./home-routes.js')

router.use('/', homeRoutes);
>>>>>>> a67ac2091ec7da703f207215ec7c5b82e41ae05f
router.use('/api', apiRoutes);

router.use('/', hbsRoutes);

router.get('/', (req, res) => res.redirect("/home"));

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
