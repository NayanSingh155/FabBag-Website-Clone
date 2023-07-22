const express = require("express");
const router = express.Router();
const Mainproduct = require("../models/mainproduct.model.js");

router.post("" , async(req,res)=>{
    try{
        const mainproduct = await Mainproduct.create(req.body);
    return res.status(200).send(mainproduct)
    }
    catch(err){
       return res.status(400).send(err.message)
    }
})


// router.get("" , async(req,res)=>{
//     try{
       

//         const mainproduct = await Mainproduct.find().lean().exec();
//         return res.status(200).send(mainproduct)
//     }
//     catch(err)
//     {
//         return res.status(400).send(err.message)
//     }
// })





router.get("" , async(req,res)=>{
    try{
        const page = req.query.page || 1;
         const pagesize = req.query.pagesize || 4;
         const skip = (page - 1) * pagesize ;
         const category = req.query.category;


        const mainproduct = await Mainproduct.find({category:category}).skip(skip).limit(pagesize).lean().exec();
        return res.status(200).send(mainproduct)
    }
    catch(err)
    {
        return res.status(400).send(err.message)
    }
})


router.get("/:id",async(req,res)=>{
    try{
         const mainproduct=await Mainproduct.findById(req.params.id).lean().exec()
         return res.status(200).send(mainproduct);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports=router;