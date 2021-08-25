const express = require('express');
const morgan = require('morgan');

const app = express();

// tell the express to use morgan
app.use(morgan('tiny'))

// app.use((req, res, next) => { // defining Middleware
//     console.log('First mIDDLEWARE');
//     return next(); // callBack
// });

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next()
})


app.get('/', (req, res) => {
    res.send('Welcome To The Home Page')
});

app.get('/cars', (req, res) => {
    console.log(`Request date: ${req.requestTime}`)
    res.send('Vroom Vroom Vroom')
});

app.use((req, res) => { // Define error-handling 
    res.status(404).send('Something broke!')
})


app.listen(3000, () => {
    console.log('localhost:3000....................');
})