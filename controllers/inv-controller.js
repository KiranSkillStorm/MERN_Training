//require models
const mongoose = require('mongoose');
const {warehouseData1, warehouseData2, warehouseData3, inv_Item} = require("../models/inv-model");

const getInvA = async () => {
    console.log("reached controller");
        await mongoose.connect(process.env.ATLAS_URI);
        const data = await warehouseData1.findOne();
        const inv = data.inventory;
        mongoose.connection.close();
        //console.log(data);
        return inv;
}

const getInvB = async () => {
    await mongoose.connect(process.env.ATLAS_URI);
    const data = await warehouseData2.findOne();
    const inv = data.inventory;
    mongoose.connection.close();
    //console.log(data);
    return inv;
}

const getInvC = async () => {
    await mongoose.connect(process.env.ATLAS_URI);
    const data = await warehouseData3.findOne();
    const inv = data.inventory;
    mongoose.connection.close();
    return inv;
}

const addItem = async (req) => {
    //console.log(req);
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        //console.log('req: ' + req);
        const item = new inv_Item({
             name: req.name, 
             quantity: req.quantity, 
             price: req.price
         });
        await item.save();
        //console.log('item: ' + item)
        const wHouse = parseInt(req.warehouseNum);
        
        switch(wHouse){
            case 1: 
                const wareH1 = await warehouseData1.findOne(); 
                wareH1.inventory.push(item); 
                await wareH1.save(); 
                console.log('save works');
                break;
            case 2: 
                const wareH2 = await warehouseData2.findOne();
                wareH2.inventory.push(item); 
                await wareH2.save(); 
                break;
            case 3: 
                const wareH3 = await warehouseData3.findOne();
                wareH3.inventory.push(item); 
                await wareH3.save(); 
                break;
        }
       
        mongoose.connection.close();
        return {status: 201, message: `${req.name} successfully added!`};
    }catch(err){
        console.log(err);
        mongoose.connection.close();
        throw {status: 500, error: 'Could not add Item ' + err};
    }
}

const deleteItem = async(req) => {
    //console.log('reached delete controller');
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        //console.log('connect works');
        const wHouse = parseInt(req.warehouseNum);
        //console.log(wHouse);
        switch(wHouse){
            
            case 1:
                const wH1 = await warehouseData1.findOneAndUpdate(
                    {},
                    {$pull:{inventory:{name: req.name}}}
                );
                break;
            case 2: 
                const wH2 = await warehouseData2.findOneAndUpdate(
                    {},
                    {$pull: {inventory:{name: req.name}}}
                );
                break;
            case 3: 
                const wH3 = await warehouseData3.findOneAndUpdate(
                    {},
                    {$pull:{inventory:{name: req.name}}}
                );
                break;
        }

        console.log('reached deleteItem');
        mongoose.connection.close();
        return {status: 201, message: `${req.name} successfully deleted!`};
    }catch(err){
        mongoose.connection.close();
        throw err;
        
    }
}

const updateItem = async(req) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        console.log('update connect');
        const wHouse = parseInt(req.warehouseNum);
        const item = new inv_Item({
            name: req.name, 
            quantity: req.quantity, 
            price: req.price
        });
        console.log('before update switch');
        switch(wHouse){
            case 1: 
            const wH1 = await warehouseData1.findOneAndUpdate(
                {},
                {$pull:{inventory:{name: req.name}}}
                );
                const wareH1 = await warehouseData1.findOne();
                wareH1.inventory.push(item); 
                await wareH1.save();
            break;
               

            case 2: 
                const wH2 = await warehouseData2.findOneAndUpdate(
                {},
                {$pull:{inventory:{name: req.name}}}
                );
                const wareH2 = await warehouseData2.findOne();
                wareH2.inventory.push(item); 
                await wareH2.save();
                break;
            case 3: 
                const wH3 = await warehouseData3.findOneAndUpdate(
                {},
                {$pull:{inventory:{name: req.name}}}
                );
                const wareH3 = await warehouseData3.findOne();
                wareH3.inventory.push(item); 
                await wareH3.save();
                break;
        }
        mongoose.connection.close();
        return;
    }
    catch(err)
    {
        mongoose.connection.close();
        console.log(err);
        throw err;
    }
}

//controller go here
//use this for api logic

module.exports = {
    //export the controllers
    getInvA,
    getInvB,
    getInvC,
    addItem,
    deleteItem,
    updateItem
}