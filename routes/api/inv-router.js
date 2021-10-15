//this is for handling data

const router = require('express').Router();
const {resolve} = require('path');
const {getInvA, getInvB, getInvC, addItem, deleteItem, updateItem} = require("../../controllers/inv-controller");

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

//ADD ITEM
router.post('/addItem', async(req,res) =>{
    //console.log('reached router');
    try{
        const data = await addItem(req.body);
        //console.log(data);
        res.status(201).json('add item success!');  
    }catch(err){
        res.status(500).json(err);
    }
});

//DELETE ITEM
router.delete('/deleteItem', async (req,res) => {
    console.log('reached router delete');
    try{
        console.log(req.body);
        const data = await deleteItem(req.body);
        console.log(data);
    }catch(err){
        
        res.status(500).json(err);
    }
});

//UPDATE ITEM
router.put('/updateItem', async (req,res) => {
    try{
        await updateItem(req.body);
        console.log(data);
    }catch(err){
        res.status(500).json(err);
    }
});



module.exports = router;