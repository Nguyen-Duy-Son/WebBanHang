const express = require('express');
const validate = require('../../middlewares/validate.middleware');
const { productValidation } = require('../../validations');
const {productController} = require('../../controllers');
const roles = require('../../middlewares/role.middleware');
const authMiddleware = require('../../middlewares/auth.middleware');
const productRouter = express.Router();

// productRouter.use(authMiddleware);

productRouter
    .route('/')
    .get(validate(productValidation.getProducts), productController.getProducts)
    .post(validate(productValidation.createProduct), productController.createProduct);

productRouter
    .route('/:productId')
    .get(validate(productValidation.getProduct), productController.getProductById)
    .put(validate(productValidation.updateProduct), productController.updateProductById)
    .delete(validate(productValidation.deleteProduct), productController.deleteProductById);

module.exports = productRouter;