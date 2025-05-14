const express = require("express");

const productRoutes = express.Router();


const logger = (req,res,next)=>{
    console.log("Product Routes");
    next();
};
productRoutes.use(logger);

productRoutes.get("/",(req, res)=>res.send("get all products"));
productRoutes.get("/:id",(req, res)=> 
res.send(`get product ${req,params.id}`)
);
productRoutes.post("/",(req,res) => res.send("create product"));
productRoutes.put("/:id",(req,res) => 
    res.send(`delet product ${params.id}`)
);

module.exports =productRoutes;

