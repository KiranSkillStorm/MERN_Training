const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invItem = new Schema({
    name: {type:String, required:true, unique: true },
    Quantity: {type:Number, required:true},
    Price: {type:Number, required:true},
    
});

const warehouse = new Schema({
    _id: {type: Number, unique:true, required: true},
    parentCompany: String,
    Location: String,
    count: Number,
    inventory: [invItem]
});


const warehouseData = mongoose.model('warehouse', warehouse);
module.exports = warehouseData;