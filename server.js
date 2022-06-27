const express = require("express");
const server = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
const apiRoutes = require("./routes");
server.get("/",(req,res)=>{
    return res.send("HELLO WORLD")
})
server.use(express.json());
server.use(apiRoutes);


server.listen(PORT,(err)=>{
    if(err){
        console.log("Error in running the server...");
        return ;
    }
    
    console.log(`Server is running at ${PORT} port`);
})