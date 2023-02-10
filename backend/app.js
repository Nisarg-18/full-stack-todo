require("dotenv").config();

const express = require("express");
const connectToDb = require("./config/db");

const app = express();

const todoRouter = require("./routes/todoRoutes");

connectToDb();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", todoRouter);

module.exports = app;
