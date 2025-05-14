// app.get('/order',(req,res)=>res.send('get all orders'));
// app.get('/order/:id',(req,res)=>res.send('get all orders'));
// pp.get('/order',(req,res)=>res.send('get all orders'));
// pp.get('/order',(req,res)=>res.send('get all orders'));
// pp.get('/order',(req,res)=>res.send('get all orders'));

const express = require("express");

const orderRoutes = express.Router();


const logger = (req,res,next)=>{
    console.log("order Routes");
    next();
};
orderRoutes.use(logger);

orderRoutes.get("/",(req, res)=>res.send("get all order"));
orderRoutes.get("/:id",(req, res)=> 
res.send(`get order ${req,params.id}`)
);
orderRoutes.post("/",(req,res) => res.send("create product"));
orderRoutes.put("/:id",(req,res) => 
    res.send(`delet product ${params.id}`)
);

module.exports =orderRoutes;

