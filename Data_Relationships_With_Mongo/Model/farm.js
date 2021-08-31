const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipsDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(error)
    })

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}] // ref: tell mongoose which model to use during population
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     {name: 'Water Melon', price: 5.99, season: 'Summer'},
//     {name: 'Mango', price: 1.99, season: 'Fall'},
//     {name: 'Blueberries', price: 4.99, season: 'Spring'},
//     {name: 'Strawberries', price: 3.99, season: 'Fall'},
//     {name: 'Peach', price: 2.69, season: 'Winter'},
//     {name: 'Bananas', price: 0.99, season: 'Summer'},
//     {name: 'Pineapple', price: 2.49, season: 'Spring'},
// ])

// const makeFarm = async () => {
//     const farm = new Farm({name: 'Agriberry Farm', city: 'Hanover, VA'});
//     const blueberries =  await Product.findOne({name: 'Blueberries'});
//     farm.products.push(blueberries)
//     await farm.save()
//     console.log(farm);
// }
// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Agriberry Farm' });
    const strawberries = await Product.findOne({name: 'Strawberries'});
    farm.products.push(strawberries);
    await farm.save();
    console.log(farm);
}

addProduct();