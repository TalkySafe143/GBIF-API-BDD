const joi = require('joi');

const createUserSchema = joi.object({
    name: joi.string().max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    isAdmin: joi.boolean()
})

const createUserProviderSchema = joi.object({
    name: joi.string().max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    isAdmin: joi.boolean(),
    apiKeyToken: joi.string().required()
})

module.exports = { createUserSchema, createUserProviderSchema };