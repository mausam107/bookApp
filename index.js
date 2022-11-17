const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

const IndexRoutes = require("./Router/Index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/app", IndexRoutes);

mongoose
    .connect(process.env.MONGOURI)
    .then((result) => {
        const server = app.listen(process.env.PORT);
        console.log("Connected!");
    })
    .catch((err) => {
        console.log(err);
    });
