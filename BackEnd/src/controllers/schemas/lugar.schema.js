const Joi = require("joi");

const LugarSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string().required(),
  lat: Joi.string().required(),
  long: Joi.string().required(),
  images: Joi.string().required(),
});
module.exports = { LugarSchema };
