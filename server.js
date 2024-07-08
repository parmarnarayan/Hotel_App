import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
//
const app = express();

//dot env config
dotenv.config();
// body parser
import bodyParser from "body-parser";
app.use(bodyParser.json());
//database conctions
connectDB();


import persanRouter from './routes/persanroutes.js'
app.use("/persan",persanRouter);

import menuRouter from './routes/menurouter.js'
app.use("/menu",menuRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("server Runing");
})



