const { request } = require("express");
const express = require("express");
const app = express()
const path = require("path");

app.set('view engine', 'ejs');
// take the current directory where index.js is located and join the that path with '/views' 
app.set('views', path.join(__dirname,'/views'));

// route
app.get('/',(request, response) => {
    response.render('home');
})

app.listen(3000, () => {
    console.log("Listening on Port: 3000");
})