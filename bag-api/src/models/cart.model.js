const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "registeration", 
        required:true},

    mainproductId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"mainproduct", 
    required:true},
    
    quantity : {type :Number ,required:false , Default:1},

},
 
{
    versionKey:false,
    timestamps:true
})

const Cart = mongoose.model("cart1" ,cartSchema);

module.exports=Cart;