const { request, response } = require("express");
const express = require("express");
const app = express()
const path = require("path");
const json_data = require("./data.json");

// group directory inside public
app.use(express.static(path.join(__dirname,'public')));



app.set('view engine', 'ejs');
// take the current directory where index.js is located and join the that path with '/views' 
app.set('views', path.join(__dirname,'/views'));


// route
app.get('/',(request, response) => {
    response.render('home');
})

app.get('/cats', (request, response) => {
    // define a cat array
    const cats = ['Oliver','Leo','Milo','Max','Loki']
    response.render('cats', {cats})
})

app.get('/r/:subreddit', (request, response) => {
    const {subreddit} = request.params;
    const data = json_data[subreddit];
    // console.log(data);
    if(data) {
        response.render('subreddit', {...data});
    } else {
        response.render('notFound', {subreddit})
    }
    
})

app.get('/random', (request, response) => {
    const random_number = Math.floor(Math.random() * 10) + 1;
    response.render(`random`, {random_number: random_number});
})

app.listen(3000, () => {
    console.log("Listening on Port: 3000");
})