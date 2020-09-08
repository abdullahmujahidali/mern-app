const express = require("express");
const conenction = require("./config/db");
const  connectDB  = require("./config/db");

const app=express();

//connect database
connectDB();
app.get("/",(req,res)=>res.send("API Running"));


// init middleware
app.use(express.json({extended:false}))

//Define routes
app.use('/api/users', require("./routes/api/users"));
app.use('/api/auth', require("./routes/api/auth"));
app.use('/api/profile', require("./routes/api/profile"));
app.use('/api/posts', require("./routes/api/posts"));


const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>console.log("Server is up and running"));