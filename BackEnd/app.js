const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const Router = require("./src/routes/lugares");
const app = express();
const config = require("config");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//complete with your resource
app.use("/lugaresriojanos", Router);

module.exports = app;
