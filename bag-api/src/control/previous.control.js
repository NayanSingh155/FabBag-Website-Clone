const express = require("express");
const router = express.Router();
const Previous = require("../models/previous.model.js");

router.post("" , async(req,res)=>{
    try{
        const previous = await Previous.create(req.body);
    return res.status(200).send(previous)
    }
    catch(err){
       return res.status(400).send(err.message)
    }
})

router.get("" , async(req,res)=>{
    try{
        const page = req.query.page;
         const pagesize = req.query.pagesize;
         const skip = (page - 1) * pagesize ;

        const previous = await Previous.find().skip(skip).limit(pagesize).lean().exec();
        return res.status(200).send(previous)
    }
    catch(err)
    {
        return res.status(400).send(err.message)
    }
})


router.get("/:id",async(req,res)=>{
    try{
         const previous=await Previous.findById(req.params.id).lean().exec()
         return res.status(200).send(previous);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports=router;