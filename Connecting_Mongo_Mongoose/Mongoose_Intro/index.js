const mongoose = require('mongoose');
// get mongoose to connect to mongoDB
mongoose.connect('mongodb://localhost:27017/carCheck', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    console.log("Connection open............");
    })
    .catch(error => {
    console.log("Something went wrong. :(", error);
    })

    // defining schema
    const car_schema = new mongoose.Schema ({
        make: String,
        model: String,
        color: String,
        year: Number,
        price: Number,
        mile: Number
    })

    // make model using car_schema
    const Car = mongoose.model('Car', car_schema);
    