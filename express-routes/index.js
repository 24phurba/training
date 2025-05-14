const express = require("express");
const productRoutes = require("./routes/product.route");
const orderRoutes = require("./routes/order.route");

const PORT= 3000;
const app = express();
app.use(express.json());

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);


app.get("/health",(req,res)=>{
    res.send("server is running and healthy");
});

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});