const basketService = require("../services/basket.service")
const httpStatus = require("http-status")
const pick = require('../utils/pick')
const catchAsync = require('../utils/catchAsync')

const getBaskets = catchAsync(async(req,res,next)=>{
    const filter = pick(req.query, ['userId']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const baskets = await basketService.getBaskets(filter, options);

    res.status(httpStatus.OK).json({
        code: httpStatus.OK,
        message: 'Get baskets successfully!',
        data: baskets,
    });
})
const getBasket = catchAsync(async (req, res, next) => {
    const basketId = req.params.basketId || req.basket.id;
    const basket = await basketService.getBasket(basketId);
    res.status(httpStatus.OK).json({
        code: httpStatus.OK,
        message: 'Get basket by id successfully!',
        data: basket,
    });
});

const createBasket = catchAsync(async (req, res, next) => {
    const basket = await basketService.createBasket(req.body);
    res.status(httpStatus.CREATED).json({
        code: httpStatus.CREATED,
        message: 'Create basket successfully!',
        data: basket,
    });
});


const updateBasket = catchAsync(async (req, res, next) => {
    const { basketId } = req.params;
    const updateBody = req.body;
    const basket = await basketService.updateBasket(basketId, updateBody);
    res.status(httpStatus.OK).json({
        code: httpStatus.OK,
        message: 'Update basket successfully!',
        data: basket,
    });
});

const deleteBasket = catchAsync(async (req, res, next) => {
    const { basketId } = req.params;
    const basket = await basketService.deleteBasket(basketId);
    res.status(httpStatus.OK).json({
        code: httpStatus.OK,
        message: 'Delete basket successfully!',
        data: basket,
    });
});

module.exports = {
    getBaskets,
    getBasket,
    createBasket,
    updateBasket,
    deleteBasket,
};

