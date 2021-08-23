
const mongoose = require('mongoose');
// get mongoose to connect to mongoDB
mongoose.connect('mongodb://localhost:27017/carApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection open............");
    })
    .catch(error => {
        console.log("Something went wrong. :(", error);
    })

    // defining schema
    const carSchema = new mongoose.Schema ({
        make: String,
        model: String,
        color: String,
        year: Number,
        price: Number,
        mile: Number
    })

    // make model using car_schema
    const Car = mongoose.model('Car', carSchema);
    // new instance and save to mongodb
    // const f_car = new Car({make: 'Honda', model: 'R', color: 'Yellow', year: 2009, price: 13000, mile: 540000})

    Car.insertMany([
        {make: 'Honda', model: 'Civic', color: 'Blue', year: 2019, price: 13000, mile: 240000},
        {make: 'Nisan', model: 'GT-R', color: 'With', year: 2020, price: 113540, mile: 100},
        {make: 'Lucid', model: 'Air', color: 'Black', year: 2022, price: 70000, mile: 0},
        {make: 'Toyota', model: 'Corolla', color: 'Blue', year: 2019, price: 12000, mile: 440000},
        {make: 'Honda', model: 'Accord', color: 'Red', year: 2022, price: 22000, mile: 0}
    ])
    .then(data => {
        console.log('Showing data', data)
    })
    .catch(error => {
        console.log('Error: ',error)
    })
