const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(32);
const price = Joi.number().integer().min(5);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();

const price_min = Joi.number().integer();
const price_max = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

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

const queryProductSchema = Joi.object({
  limit: limit,
  offset: offset,
  price: price,
  price_min: price_min,
  price_max: Joi.when('price_min', {
    is: Joi.number().integer().required(),
    then: Joi.number().min(Joi.ref('price_min')).required(),
    otherwise: Joi.number().min(0).optional()
  })
});

module.exports = { createProductSchema, getProductSchema, updateProductSchema, queryProductSchema };

