//this is for handling data

const router = require('express').Router();
const {resolve} = require('path');
const {getInvA, getInvB, getInvC} = require("../../controllers/inv-controller");

router.get('/A', async (req, res)=>{
    console.log('reached router.use');
    try{
        res.status(200).json(await getInvA());
    }catch(err){
        console.log(err);
    }

});

 router.get('/B', async (req,res) =>{
     try{
         res.status(200).json(await getInvB());
        }catch(err){
        console.log(err);
        }
});

router.get('/C', async (req, res)=>{
    //console.log('reached router.use');
    try{
        res.status(200).json(await getInvC());
    }catch(err){
        console.log(err);
    }

});




module.exports = router;