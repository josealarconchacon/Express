const { request, response } = require("express");
const express = require("express"); // require express
const app = express(); 


// run app.use every time there is an incoming request
// app.use((request, response) => { 
//     console.log("New Request!!!!!");
//     response.send("<h1>This is a response: We got your request</h1>");
// })

// route
app.get('/', (request, response) => {  
    response.send('HOME PAGE!!!!!!!....');
})

app.get('/r/:subreddit', (request, response) => {  
    const { subreddit } = request.params;
    response.send(`<h1>This is the ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/:id', (request, response) => {  
    const { subreddit, id } = request.params;
    response.send(`<h1>Viewing id ${id}</h1>`);
})

app.get('/cats', (request, response) => {
    response.send('I am a cat');
})

app.get('/dogs', (request, response) => {
    response.send('I am a dog');
})

app.get('/search',(request, response) => {
    const { q } = request.query;
    if(!q) {
        response.send("Nothing found.......");
    }
    console.log(`<h1>Search for ${q}</h1>`);
})

app.get('*', (request, response) => {
    response.send(`invalid path........`);
})

app.listen(3000, () => {
    console.log("listen on port 3000");
})