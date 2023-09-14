const express = require("express")
const app = express()
const port = 5000
const cors = require("cors")
const dotenv = require("dotenv")
const router = require("./Routes/portfolioRoutes")
const mongoose = require("mongoose")
const path = require("path")

// dotenv
dotenv.config()
// Middleware 
app.use(cors())
app.use(express.json())
// Routes
app.get("/", (req,res)=>{
    res.send("hello world")
})
// connecting for mongo database
mongoose.connect("mongodb://127.0.0.1:27017/myportfolio",{useNewUrlParser:true})
// checking for connecting in  database
mongoose.connection.once("open",()=>{
    console.log("database is connected")
})

// static file access 
app.use(express.static(path.join(__dirname, "./frontened/build")));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./frontened/build/index.html"));
  });

app.use("/" ,router)
// port listen
app.listen(port,()=>{
    console.log("port is contected")
})
