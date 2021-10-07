//require models
const mongoose = require('mongoose');
const warehouse = require("./Project_1/models/inv-model.js");

const getInv = async () => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        const data = await warehouse.findOne(_id);

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
    
}