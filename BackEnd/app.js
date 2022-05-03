const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
<<<<<<< HEAD
const Router = require("./src/routes/lugares");
=======
require("dotenv").config();
const Router = require("./src/routes/attraction");
>>>>>>> ff31818822fe80cf0f781099135b02adba7f9e66
const app = express();
const config = require("config");

<<<<<<< HEAD
require("dotenv").config();
const mongoose = require("mongoose");
const mongooseConnectionString = config.get("db.con.conString");
mongoose
  .connect(mongooseConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch((err) => {
    throw err;
  });

=======
>>>>>>> ff31818822fe80cf0f781099135b02adba7f9e66
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//complete with your resource
app.use("/lugaresriojanos", Router);

module.exports = app;
