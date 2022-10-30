const Joi = require("joi");

const schemas = {
  SCHOOLDETAIL: Joi.object().keys({
    id: Joi.number().min(1).required(),
  }),
  SCHOOL: Joi.object().keys({
    id: Joi.number().min(1).required(),
    name: Joi.string().required(),
  }),
};

module.exports = schemas;
