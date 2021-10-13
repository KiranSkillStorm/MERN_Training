//require models
const mongoose = require('mongoose');
const {warehouseData1, warehouseData2, warehouseData3} = require("../models/inv-model");

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
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        console.log("addItem connected");
        const item = new invItem({
             name: req.body.name, 
             Quantity: req.body.Quantity, 
             Price: req.body.Price
         });
        console.log(item)
        const wHouse = req.body.warehouseNum;
        switch(wHouse){
            //case 1: await warehouseData1.inventory.push(item); break;
            //case 2: await warehouseData2.inventory.push(item); break;
            //case 3: await warehouseData3.inventory.push(item); break;
        }
        console.log('reached addItem');
        mongoose.connection.close();
        return {status: 201, message: `${name} successfully added!`};
    }catch(err){
        mongoose.connection.close();
        throw{status: 500, error: 'Could not add Item ' + err};
    }
}

const deleteItem = async() => {
    try{
        await mongoose.connection(process.env.ATLAS_URI);
        const wHouse = req.body.warehouseNum;
        switch(wHouse){
            case 1: warehouseData1.inventory.findOne(req.body.name, (err, warehouseData1) => {
                    warehouseData1.inventory[0].remove();
            });break;
            case 2: warehouseData2.inventory.findOne(req.body.name, (err, warehouseData2) => {
                warehouseData2.inventory[0].remove();
            });break;
            case 3: warehouseData3.inventory.findOne(req.body.name, (err, warehouseData3) => {
                warehouseData3.inventory[0].remove();
            });break;
        }
        console.log('reached deleteItem');
        mongoose.connection.close();
        return;
    }catch(err){
        mongoose.connection.close();
        throw err;

    }
}

const updateItem = async() => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        const wHouse = req.body.warehouseNum;
        const filter = {name: req.body.name};
        const update = {
            Quantity: req.body.Quantity,
            Price: req.body.Price
        }
        switch(wHouse){
            case 1: await warehouseData1.inventory.findOneAndUpdate(filter,update); break;
            case 2: await warehouseData2.inventory.findOneAndUpdate(filter,update); break;
            case 3: await warehouseData3.inventory.findOneAndUpdate(filter,update); break;
        }
        //debug console logs
        
        console.log('reached updateItem');
        mongoose.connection.close();
        return;
    }
    catch(err)
    {
        mongoose.connection.close();
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