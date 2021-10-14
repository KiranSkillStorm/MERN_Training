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
    console.log('reached delete controller');
    try{
        await mongoose.connection(process.env.ATLAS_URI);
        const wHouse = parseInt(req.warehouseNum);
        switch(wHouse){
            
            case 1: await warehouseData1.inventory.findOne(req.name, (err, warehouseData1) => {
                    warehouseData1.inventory[0].remove();
                });
                console.log('delete switch');
                await warehouseData1.save();
                console.log('after delete switch save');
                break;
            case 2: await warehouseData2.inventory.findOne(req.name, (err, warehouseData2) => {
                warehouseData2.inventory[0].remove();
                });
                await warehouseData2.save();
                break;
            case 3: await warehouseData3.inventory.findOne(req.name, (err, warehouseData3) => {
                warehouseData3.inventory[0].remove();
                });
                await warehouseData3.save();
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