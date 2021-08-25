const express = require('express');
const morgan = require('morgan');

const app = express();

// tell the express to use morgan
app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.get('/cars', (req, res, next) => {
    console.log(`Request date: ${req.requestTime}`)
    res.send('Vroom Vroom Vroom')
    next();
});

const verifyPassword = (req, res, next) => { // middleware
    const { password } = req.query;
    if(password === 'hello') {
        next();
    } 
    res.send('SORRY, YOU NEED A PASSWORD')
}

app.get('/', (req, res) => {
    console.log(`Request date: ${req.requestTime}`)
    res.send('Welcome To The Home Page')
});

app.get('/cars', (req, res) => {
    console.log(`Request date: ${req.requestTime}`)
    res.send('Vroom Vroom Vroom')
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send('Secret Pass:::::::')
})

app.use((req, res) => { // Define error-handling 
    res.status(404).send('Something broke!')
})

app.listen(3000, () => {
    console.log('localhost:3000....................');
})