const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(18);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  categoryId: categoryId.required(),
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId: categoryId,
});

module.exports = { createProductSchema, getProductSchema, updateProductSchema };

