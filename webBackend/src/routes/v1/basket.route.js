const express = require('express');
const validate = require('../../middlewares/validate.middleware');
const { basketValidation } = require('../../validations');
const { basketController } = require('../../controllers');
const roles = require('../../middlewares/role.middleware');
const authMiddleware = require('../../middlewares/auth.middleware');
const basketRouter = express.Router();

// userRouter.use(authMiddleware);

basketRouter
    .route('/')
    .get(validate(basketValidation.getBaskets), basketController.getBaskets)
    .post(validate(basketValidation.createBasket), basketController.createBasket);

basketRouter
    .route('/:basketId')
    .get(validate(basketValidation.getBasket), basketController.getBasket)
    .put(validate(basketValidation.updateBasket), basketController.updateBasket)
    .delete(validate(basketValidation.deleteBasket), basketController.deleteBasket);

module.exports = basketRouter;