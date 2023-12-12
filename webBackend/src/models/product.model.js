const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { toJSON, paginate } = require('./plugins');

const productSchema = new Schema ({
    name:{
        type:String,
        required:[true,"Please provide your nameProduct!"],
        trim: true,
        unique: true
    },
    brandId:{
        type:Schema.Types.ObjectId,
        default:null
    },
    cost:{
        type:Number,
        required:[true,"Please provide your costProduct!"],
        unique: true,

    },
    image:{
        type: String,
        default: null,
    }
})

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;




