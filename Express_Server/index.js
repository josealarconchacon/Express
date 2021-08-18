const express = require("express"); // require express
const app = express(); 


// run app.use every time there is an incoming request
app.use(() => { 
    console.log("New Request!!!!!");
})

app.listen(3000, () => {
    console.log("listen on port 3000");
})