const cors =require("cors");
require('dotenv').config()
const express = require("express");
const app = express();
app.use(cors())
app.use(express.json());
const connect = require("./configs/db.js")




app.listen(process.env.PORT || 4343,async()=>{
    await connect();
    console.log("i am connected")
})

const productControl = require("./control/product.control");
app.use("/products" , productControl);

const previousControl = require("./control/previous.control")
app.use("/previous", previousControl)

const mainproductControl = require("./control/mainproduct.control")
app.use("/mainproduct" , mainproductControl)

const registerationControl = require("./control/registeration.control");
app.use("/registeration" , registerationControl);

const loginControl = require("./control/login.control");
app.use("/login" , loginControl)

const cartControl = require("./control/cart.control")
app.use("/cart" ,cartControl)