const Joi = require('@hapi/joi');

const userSchema = Joi.object({
    id: Joi.number().integer(),
    name: Joi.string().min(1).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(5).max(20).required(),
    admin: Joi.boolean(),
    moderator: Joi.boolean()
});

const torteSchema = Joi.object({
    id: Joi.number().integer(),
    naziv: Joi.string().min(1).required()
   
});

const kolaciSchema = Joi.object({
    id: Joi.number().integer(),
    naziv: Joi.string().min(1).required(),
    cena: Joi.string().min(1).required()
});

const mafiniSchema = Joi.object({
    id: Joi.number().integer(),
    naziv: Joi.string().min(1).required(),
    cena: Joi.string().min(1).required()
});

module.exports = {
    userSchema,
    torteSchema,
    kolaciSchema,
    mafiniSchema
}
