//import viewsRoutes and inv-router here
const router = require('express').Router();
const {resolve} = require('path');
const apiRoute = require('./api/inv-router');
router.use('/api/inv-router', apiRoute);


module.exports = router;