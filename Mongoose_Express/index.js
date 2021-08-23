const express = require('express');
const app = express();
const path = require('path');
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


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// route
app.get('/products', async (req, res) => {
    // get all products
    const products = await Product.find({})
    console.log(products);
    res.render('products/index', { products })
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    // find product by id
    const foundProductById =  await Product.findById(id)
    // console.log(foundProductById)
    res.render('products/detail', { foundProductById })
})

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
app.listen(3000, () => {
    console.log('App is on port 3000......................')
})