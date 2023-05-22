const router = require('express').Router();

const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);

//Name these the routes i'm going to use

module.exports = router;
