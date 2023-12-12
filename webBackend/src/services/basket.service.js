const Basket = require("../models/basket.model")
const httpStatus = require('http-status')
const ApiError = require("../utils/ApiError")

const getBasket = async(basketId)=>{
    const basket = await Basket.findById(basketId);
    if(!basket) throw new ApiError(httpStatus.NOT_FOUND,'basket not found');
    return basket;
}

const getBaskets = async (filter, options) => {
    const baskets = await Basket.paginate(filter, options);
    if (!baskets || baskets.length === 0) {
        throw new ApiError(httpStatus.NOT_FOUND, 'baskets not found');
    }
    return baskets;
};

const createBasket = async (basketBody) => {
    const rawBasket = await Basket.findOne({userId:basketBody.userId});
    if(rawBasket) throw new ApiError(httpStatus.NOT_FOUND,'Basket already exists');
    return Basket.create(basketBody);
};

const updateBasketById = async (backetId, basketBody) => {
    const basket = await Basket.findByIdAndUpdate(backetId, basketBody, { new: true });
    if (!basket) {
        throw new ApiError(httpStatus.NOT_FOUND, 'basket not found');
    }
    return basket;
};

const deleteBasketById = async (backetId) => {
    const basket = await Basket.findByIdAndDelete(backetId);
    if (!basket) {
        throw new ApiError(httpStatus.NOT_FOUND, 'basket not found to delete!');
    }
    return basket;
};

module.exports = {
    getBasket,
    getBaskets,
    createBasket,
    updateBasketById,
    deleteBasketById
};


