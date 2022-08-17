
const express = require('express');
const app = express()

let port = 3000;

//setting a folder that holds static resources 

app.use(express.static('public')) //hold all of our static resources

app.use(require('./routes/index'))

// app.get('/', (req, res) => { 
    
//     res.send('Hello world')

// })


app.get('/aboutus', (req, res) => { 
    
    res.send('About us')

})


app.get('/faq', (req, res) => { 
    
    res.send('faq')

})

//turn on server 

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

