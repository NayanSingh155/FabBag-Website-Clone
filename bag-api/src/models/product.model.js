const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title : {type : String , required : true},
    image : {type : String , required : true},
    price : { type :Number , required : true},
},
{
    versionKey:false,
    timestamps:true
})

const Product = mongoose.model("product" ,productSchema);

module.exports=Product;