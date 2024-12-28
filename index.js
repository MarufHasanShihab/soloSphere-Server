const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express());


app.get("/",(req,res)=>{
    res.send("Server Is Runningg")
})

app.listen(port,()=>console.log(`Your Server Is Running In ${port} Port`));