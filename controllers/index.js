const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.get('/', (req, res) => res.send('welcome to the api'));

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
