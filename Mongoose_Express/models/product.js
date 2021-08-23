const mongoose = require('mongoose');

// schema
const product_schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})

// compile model
const Product = mongoose.model('Product', product_schema);
module.exports = Product;