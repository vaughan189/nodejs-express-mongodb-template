const router = require('express').Router();
const ContactRoutes = require('./Contact');
const UserRoutes = require('./Contact');

router.use('/user', UserRoutes);
router.use('/contact', ContactRoutes);

module.exports = router;
