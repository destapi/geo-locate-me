const express = require('express');
const router = express.Router();
const homeRouter = require('./home');
const usersRouter = require('./users');
const devicesRouter = require('./devices');

router.use(homeRouter);
router.use('/users', usersRouter);
router.use('/devices', devicesRouter);

module.exports = router;
