const express = require("express");
const routes = require('./routes/route');
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// middlewares that are used
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes );

app.listen(process.env.PORT, (req, res)=>{
    console.log("Server Listening on Port 3000")
})