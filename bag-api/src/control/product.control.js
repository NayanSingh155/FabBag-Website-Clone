const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");

router.post("" , async(req,res)=>{
    try{
        const product = await Product.create(req.body);
    return res.status(200).send(product)
    }
    catch(err){
       return res.status(400).send(err.message)
    }
})

router.get("" , async(req,res)=>{
    try{
         const page = req.query.page;
         const pagesize = req.query.pagesize;
         const skip = (page - 1) * pagesize;

        const product = await Product.find().skip(skip).limit(pagesize).lean().exec();
        return res.status(200).send(product)
    }
    catch(err)
    {
        return res.status(400).send(err.message)
    }
})

router.get("/:id",async(req,res)=>{
    try{
         const product=await Product.findById(req.params.id).lean().exec()
         return res.status(200).send(product);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports=router;