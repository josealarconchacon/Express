const express = require('express');
const morgan = require('morgan');

const app = express();

// tell the express to use morgan
app.use(morgan('tiny'))

app.use((req, res, next) => { // defining Middleware
    console.log('First mIDDLEWARE');
    return next(); // callBack
});
app.use((req, res, next) => {
    console.log('Second mIDDLEWARE');
    return next(); // callBack
});

app.get('/', (req, res) => {
    res.send('Welcome To The Home Page')
});

app.get('/cars', (req, res) => {
    res.send('Vroom Vroom Vroom')
});


app.listen(3000, () => {
    console.log('localhost:3000....................');
})