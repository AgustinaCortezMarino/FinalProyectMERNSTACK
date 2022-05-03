const Joi = require("joi");

const LugarSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string().required(),
  lat: Joi.number().required(),
  long: Joi.number().required(),
  images: Joi.array().required(),
});
module.exports = { LugarSchema };
