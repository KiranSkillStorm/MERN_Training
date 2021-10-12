//import viewsRoutes and inv-router here
const router = require('express').Router();
const {resolve} = require('path');
const apiRoute = require('./api/inv-router');
const viewRoutes = require('./views/viewRoutes');
router.use('/api/inv-router', apiRoute);
router.use('/loadData', apiRoute);
router.use('/', viewRoutes);



module.exports = router;