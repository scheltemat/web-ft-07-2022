const express = require('express');

const app = express()

let port = 7000


app.get('/', (req, res)=>{
    res.send('<h1>Hello World</h1>')
})

app.get('/cats', (req, res)=>{
    res.send('<h1>Meow</h1>')
})

app.get('/dogs', (req, res)=>{
    res.send('<h1>Woof</h1>')
})

app.get('/cats_and_dogs', (req, res)=>{
    res.send('<h1>Living together</h1>')
})

app.get('/greet/:name', (req, res)=>{

    let name = req.query.name

    res.send(`<h1>Hello, ${name}!</h1>`)
})




app.listen(port, ()=>{
    console.log(`running on port ${port}`);
})