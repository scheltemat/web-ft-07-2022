// install express
const express = require('express');
const app = express();
let port = 3000;

// req => express => res
// configure public folder
app.use(express.static('public'))// static assests go

//install ejs templates
app.set('view engine', 'ejs')


// setup a routes folder 
//index.js 
//speakers.js

app.use(require('./routes/index'))
app.use(require('./routes/speakers'))
app.use(require('./routes/feedback'))

//start a server

app.listen(port, ()=>{
    console.log(`listenig on port: ${port}`);
})