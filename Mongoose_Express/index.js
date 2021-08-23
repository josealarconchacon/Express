const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// integrate mongoose
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Mongoose: Connection Open.....');
    })
    .catch(error => {
        console.log('Error:', error);
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('Woof')
})

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
app.listen(3000, () => {
    console.log('App is on port 3000......................')
})