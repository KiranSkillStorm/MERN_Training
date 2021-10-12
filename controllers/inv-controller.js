//require models
const mongoose = require('mongoose');
const warehouse = require("../models/inv-model");

const getInvA = async () => {
    console.log("reached controller");
        await mongoose.connect(process.env.ATLAS_URI);
        //const data = await warehouse.findOne({warehouse: id});
        const data = await warehouse.findOne();
        const inv = data.inventory;
        //const array = [inv.name, inv.Quantity, inv.Price];
        //console.log(data.inventory);
        //console.log(Array.isArray(array));
        return inv;
}

//controller go here
//use this for api logic

module.exports = {
    //export the controllers
    getInvA
    
}