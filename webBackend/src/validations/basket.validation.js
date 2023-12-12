const Joi = require('joi')
const {objectId} = require('./custom.validation')

const createBasket = {
    body: Joi.object().keys({
        userId: Joi.string().required(),
        purchasedProducts:Joi.array().items({
            productId:Joi.string().custom(objectId),
            numberOfProduct:Joi.number().integer()
        })
    })
}
const getBaskets = {
    query: Joi.object().keys({
        basketId:Joi.string().custom(objectId),
        userId:Joi.string().custom(objectId),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    })
}
const getBasket = {
    params: Joi.object().keys({
        basketId: Joi.string().custom(objectId),
    }),
};
const updateBasket = {
    params: Joi.object().keys({
        userId: Joi.required().custom(objectId),
    }),
    body: Joi.object()
        .keys({
            userId: Joi.string().required(),
            purchasedProducts:Joi.array().items({
                productId:Joi.string().custom(objectId),
                numberOfProduct:Joi.number().integer()
            })
        })
        .min(1),
};
const deleteBasket = {
    params: Joi.object().keys({
        userId: Joi.string().custom(objectId),
    }),
};
module.exports = {
    createBasket,
    getBasket,
    getBaskets,
    updateBasket,
    deleteBasket
}
