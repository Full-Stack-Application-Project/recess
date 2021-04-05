const router = require('express').Router();

const apiRoutes = require('./api/');

router.use('/api', apiRoutes);

router.get('/', (req, res) => res.send('welcome to the api'));

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
