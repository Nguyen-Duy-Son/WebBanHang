const express = require('express');
const validate = require('../../middlewares/validate.middleware');
const { basketValidation } = require('../../validations');
const { basketController } = require('../../controllers');
const roles = require('../../middlewares/role.middleware');
const authMiddleware = require('../../middlewares/auth.middleware');
const basketRouter = express.Router();

basketRouter.use(authMiddleware);

basketRouter
    .route('/')
    .get(validate(basketValidation.getBaskets), basketController.getBaskets)
    .post(validate(basketValidation.createBasket), basketController.createBasket);
basketRouter
    .route('/add-product')
    .post(validate(basketValidation.addProductToBasketOfUser), basketController.addProductToBasket);
basketRouter
    .route('/:basketId')
    .get(roles("user"),validate(basketValidation.getBasket), basketController.getBasket)
    .put(roles("user"),validate(basketValidation.updateBasket), basketController.updateBasket)
    .delete(roles("user"),validate(basketValidation.deleteBasket), basketController.deleteBasket);

module.exports = basketRouter;