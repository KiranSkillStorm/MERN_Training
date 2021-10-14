const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invItem = new Schema({
    name: {type:String, required:true, unique: true },
    quantity: {type:Number, required:true},
    price: {type:Number, required:true},
    
});

const warehouse = new Schema({
    
    parentCompany: String,
    Location: String,
    count: Number,
    inventory: [invItem]
});


const warehouseData1 = mongoose.model('Company_A', warehouse, 'Company_A');
const warehouseData2 = mongoose.model('Company_B', warehouse, 'Company_B');
const warehouseData3 = mongoose.model('Company_C', warehouse, 'Company_C');
const inv_Item = mongoose.model('invItem', invItem);
module.exports = {warehouseData1, warehouseData2, warehouseData3, inv_Item};