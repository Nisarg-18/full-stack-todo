const express = require("express");
const { home } = require("../controllers/homeController");

const todoRouter = express.Router();

todoRouter.get("/", home);

module.exports = todoRouter;
