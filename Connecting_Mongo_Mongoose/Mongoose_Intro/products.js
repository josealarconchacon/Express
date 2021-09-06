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
            required: true,
            min: [0, 'Price most be positive number']
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
        },
        size: {
            type: String,
            enum: ['S','M','L','XL']
        }
    })
    
    productSchema.method.greet = function() {
        console.log('HELLO..');
        console.log(`- from ${this.name}`);
    }
    productSchema.method.addCategory = function(newP) {
        this.addCategory.push(newP);
        return this.save();
    }


    // Static Methods
    productSchema.static.fireSale = function() {
        this.updateMany({}, {onSale: true, price:0})
    }

    // Model Instance Methods
    const Product = mongoose.model('Product', productSchema);

    const findProduct = async () => { // find a product
        const foundProduct = await Product.findOne({name: 't-shirt'})
        console.log(foundProduct);
        await foundProduct.toggleOnSale();
        console.log(foundProduct);
        await foundProduct.toggleOnSale('Outdoors');
        console.log(foundProduct);
    }

    Product.fireSale().then(d => console.log(d));

    // findProduct();




    // const Product = mongoose.model('Product', productSchema);
    // const newJeans = new Product({name: 'Sport Short', price: 50, onSale: false, categories: ['Recycling', 'Blue thread'], size: 'S' })
    // newJeans.save()
    // Product.findOneAndUpdate({name: 'Black Jeans'}, {price}, {new: true})
    // .then(data => {
    //     console.log('IT WORKS!!!', data);
    // })
    // .catch(error => {
    //     console.log('Error', error);
    // })