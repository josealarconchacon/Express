const mongoose = require('mongoose');

const Product = require('./models/product');

// integrate mongoose
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Mongoose: Connection Open.....');
    })
    .catch(error => {
        console.log('Error:', error);
    })

// const p = new Product({
//     name: 'Apple',
//     price: 1.59,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p);
//     })
//     .catch(error => {
//         console.log(error);
//     })

const seedsProduct = [
    {
        name: 'Blueberries',
        price: 2.99,
        category: 'fruit'
    },
    {
        name: 'Fairy Eggplant',
        price: 4.99,
        category: 'vegetable'
    },
    {
        name: 'Orange',
        price: 1.96,
        category: 'fruit'
    },
    {
        name: 'Blueberries',
        price: 2.99,
        category: 'fruit'
    },
    {
        name: 'Watermelon',
        price: 6.99,
        category: 'fruit'
    },
    {
        name: 'Tomatoes',
        price: 1.49,
        category: 'vegetable'
    }
]

Product.insertMany(seedsProduct)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.log(error)
    })
