
const express = require('express');
const app = express()

let port = 3000;

//setting a folder that holds static resources 

app.use(express.static('public')) //hold all of our static resources
// configuring ejs to work with application
app.set('view engine', 'ejs')  //telling express what templating engine you're using 

// app.set('views', 'myviews')  //maps default views name to something else

app.use(require('./routes/index'))
app.use(require('./routes/aboutus'))
app.use(require('./routes/'))
app.use(require('./routes/city'))


//n-tier 
// view layer - buisness layer - data tier

// MVC
// Model - Viewer - Controller 



//turn on server 

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

