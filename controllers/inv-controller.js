//require models
const mongoose = require('mongoose');
const {warehouseData1, warehouseData2, warehouseData3} = require("../models/inv-model");

const getInvA = async () => {
    console.log("reached controller");
        await mongoose.connect(process.env.ATLAS_URI);
        const data = await warehouseData1.findOne();
        const inv = data.inventory;
        //console.log(data);
        return inv;
}

const getInvB = async () => {
    await mongoose.connect(process.env.ATLAS_URI);
    const data = await warehouseData2.findOne();
    const inv = data.inventory;
    //console.log(data);
    return inv;
}

const getInvC = async () => {
    await mongoose.connect(process.env.ATLAS_URI);
    const data = await warehouseData3.findOne();
    const inv = data.inventory;
    return inv;
}

//controller go here
//use this for api logic

module.exports = {
    //export the controllers
    getInvA,
    getInvB,
    getInvC
}