const express = require("express");
const routes = require('./routes/route');
const bodyParser = require("body-parser");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

// middlewares that are used
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());



//routes
app.use("/api/v1/auth", routes);

database.connect();

app.listen(process.env.PORT, (req, res)=>{
    console.log("Server Listening on Port 3000")
})