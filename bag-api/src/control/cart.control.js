const express = require("express");
const router = express.Router();
const Cart = require("../models/cart.model.js");



router.post("/" , async(req,res)=>{
    try{
        const cart = await Cart.create(
           req.body
        );
    return res.status(200).send(cart)
    }
    catch(err){
       return res.status(400).send(err.message)
    }
})


// 

router.get("/:id",async(req,res)=>{
    try{
         const cart=await Cart.find({userId:req.params.id}).populate({path : "mainproductId"}).lean().exec()
         return res.status(200).send(cart);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})


router.delete("/id",async(req,res)=>{
    try{
          const cart = await Cart.findAndDelete({userId :req.params.id})
          return res.status(200).send(cart)
    }
    catch(err)
    {
        return res.status(400).send(err.message)
    }
})

module.exports=router;