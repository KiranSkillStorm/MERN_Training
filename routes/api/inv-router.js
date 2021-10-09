//this is for handling data

const router = require('express').Router();
const {resolve} = require('path');
const {getInvA} = require("../../controllers/inv-controller");

router.get('/loadDataA', (req,res) => {
    console.log('testing');
    //call controller
    
    res.status(200).json(getInvA());
});




module.exports = router;