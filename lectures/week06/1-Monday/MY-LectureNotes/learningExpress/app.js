

const express = require('express'); //this is a function block

const app = express(); //instance of express


// create server and start

app.listen(3000, ()=>{
    console.log(`Running on port 3000`);
})