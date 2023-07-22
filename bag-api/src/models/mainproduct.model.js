const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const mainproductSchema = new mongoose.Schema({
    title : {type : String , required : true},
    image : {type : String , required : true},
    price : { type :Number , required : true},
    category : {type :String, required : true},
    description : {type : String , required : true}
},
{
    versionKey:false,
    timestamps:true
})

const Mainproduct = mongoose.model("mainproduct" ,mainproductSchema);

module.exports=Mainproduct;