

const express = require('express');

const app2 = express();

let port = 6900;

app2.get('/', (req, res)=>{
    res.send('<h1>Big peepee poopoo</h1>')
})

app2.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})