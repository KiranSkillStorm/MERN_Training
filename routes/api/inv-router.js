//this is for handling data

const router = require('express').Router();
const {resolve} = require('path');
const {getInvA} = require("../../controllers/inv-controller");

router.use(async (req, res)=>{
    console.log('reached router.use');
    try{
        res.status(200).json(await getInvA());
    }catch(err){
        console.log(err);
    }

});

/*router.get('/loadDataA', async (req,res) => {
    console.log('testing');
    //call controller
    
    try{   
        res.send("hello world");
        //await res.status(200).json(getInvA());
    }catch(err){
        console.log(err);
    }
});*/




module.exports = router;