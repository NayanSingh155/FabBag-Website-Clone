const mongoose = require("mongoose");

const previousSchema = new mongoose.Schema({
    title : {type : String , required : true},
    image : {type : String , required : true},
    price : { type :Number , required : true},
},
{
    versionKey:false,
    timestamps:true
})

const Previous = mongoose.model("previous" ,previousSchema);

module.exports=Previous;