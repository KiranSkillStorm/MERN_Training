//this is for routing html pages and stuff
const router = require('express').Router();
const {resolve} = require('path');

router.get('/form',(req,res) => {
    res.sendFile(resolve('public', 'views', 'form.html'));
});

router.get('/',(req,res) => {
    res.sendFile(resolve('public', 'views', 'index.html'));
});

module.exports = router;