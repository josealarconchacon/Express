const { request } = require('express');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json);

app.get('/tacos', (request, response) => {
    response.send("GET /tacos response")
})

app.post('/tacos', (request, response) => {
    const {meat, qty, price} = request.body;
    response.send(`Here is your ${qty} ${meat} ${price}`);
})


app.listen(3000, () => {
    console.log("On Port 3000........");
})