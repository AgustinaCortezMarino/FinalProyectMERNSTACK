const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const PlacesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  images: { type: [] },
});

module.exports = model("Places", PlacesSchema);
