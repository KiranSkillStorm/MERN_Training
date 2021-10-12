const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invItem = new Schema({
    name: {type:String, required:true, unique: true },
    Quantity: {type:Number, required:true},
    Price: {type:Number, required:true},
    
});

const warehouse = new Schema({
    id: {type: Number, unique:true, required: true},
    parentCompany: String,
    Location: String,
    count: Number,
    inventory: [invItem]
});


const warehouseData1 = mongoose.model('Company_A', warehouse, 'Company_A');
const warehouseData2 = mongoose.model('Company_B', warehouse, 'Company_B');
module.exports = {warehouseData1, warehouseData2};