const { Places } = require("../db/models/lugares.models");
const { LugarSchema } = require("./schemas/lugar.schema");
const Joi = require("joi");

async function getLugares(req, res) {
  try {
    const lugares = await Places.find();
    return res.status(200).json(lugares);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      code: 500,
      message: "Internal server issue ocurred",
    });
  }
}

async function getLugarById(req, res) {
  const lugar = await Places.findById(req.params.id);
  try {
    return res.status(200).json(lugar);
  } catch (e) {
    return res.status(500).json({
      code: 500,
      message: "Internal server issue occurred",
    });
  }
}

async function createNewLugar(req, res) {
  const bodyData = {
    name: req.body.name,
    description: req.body.description,
    lat: req.body.lat,
    long: req.body.long,
    images: req.body.images,
  };
  try {
    Joi.assert(bodyData, LugarSchema);
    const newLugar = new Lugar({
      name: bodyData.name,
      description: bodyData.description,
      lat: bodyData.lat,
      long: bodyData.long,
      images: bodyData.images,
    });
    await newLugar.save();
    return res.status(201).json({ mensaje: "New place created correctly" });
  } catch (e) {
    res.status(400).json({
      code: "bad_request",
      message: "Bad request. Please check sent values",
    });
  }
}

async function deleteLugar(req, res) {
  try {
    await Places.findByIdAndDelete(req.params.id);
    return res.status(200).json({ mensaje: "Attraction deleted correctly" });
  } catch (e) {
    return res.status(500).json({
      code: 500,
      message: "Internal server issue occurred",
    });
  }
}

async function updateLugar(req, res) {
  const bodyData = {
    name: req.body.name,
    description: req.body.description,
    lat: req.body.lat,
    long: req.body.long,
    images: req.body.images,
  };
  try {
    Joi.assert(bodyData, LugarSchema);
    await Places.findByIdAndUpdate(req.params.id, {
      name: bodyData.name,
      description: bodyData.description,
      lat: bodyData.lat,
      long: bodyData.long,
      images: bodyData.images,
    });

    return res.status(200).json("place updated correctly");
  } catch (e) {
    res.status(400).json({
      code: "bad_request",
      message: "Bad request. Please check sent values",
    });
  }
}

module.exports = {
  getLugares,
  getLugarById,
  createNewLugar,
  deleteLugar,
  updateLugar,
};
