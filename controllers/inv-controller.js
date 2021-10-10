//require models
const mongoose = require('mongoose');
const warehouse = require("../models/inv-model");

const getInvA = async () => {
    console.log("reached controller");
        await mongoose.connect(process.env.ATLAS_URI);
        //const data = await warehouse.findOne({warehouse: id});
        const data = await warehouse.find();
        console.log(data);
        return data;
}

//controller go here
//use this for api logic

module.exports = {
    //export the controllers
    getInvA
    
}