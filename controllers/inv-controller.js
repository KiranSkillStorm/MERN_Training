//require models
const mongoose = require('mongoose');
const warehouse = require("../models/inv-model");

const getInvA = async () => {
    try{
        console.log("reached controller");
        await mongoose.connect(process.env.ATLAS_URI);
        const data = await warehouse.findOne({warehouse: _id});
        console.log(data);

    }catch(err) {
        mongoose.connection.close();
        console.log(err.message);
        throw {status: 500, error: 'Could not retrieve data'};
    }
}

//controller go here
//use this for api logic

module.exports = {
    //export the controllers
    getInvA
    
}