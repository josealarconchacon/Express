const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');
// get mongoose to connect to mongoDB
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection open............");
    })
    .catch(error => {
        console.log("Something went wrong. :(", error);
    })

    // // defining schema
    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            maxLength: 12
        },
        price: { 
            type: Number,
            required: true
        },
        onSale: { // optional
            type: Boolean
        },
        categories: [String],
        qty: { 
            online: { // nested object
                type: Number,
                default: 0
            },
            isStore: {
                type: Number,
                default: 0
            }
        }
    })

    const Product = mongoose.model('Product', productSchema);
    const newJeans = new Product({name: 'Black Jeans', price: 100, onSale: false, categories: ['Recycling', 'Black thread'] })
    newJeans.save()
    .then(data => {
        console.log('IT WORKS!!!', data);
    })
    .catch(error => {
        console.log('Error', error);
    })