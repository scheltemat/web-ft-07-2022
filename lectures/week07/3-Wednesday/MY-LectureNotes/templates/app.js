
const express = require('express');
const app = express();

let port = 3000;

// setting up a folder that holds static resources

app.use(express.static('public')); //hold all of our static resources
//configuring ejs to work with application
app.set('view engine', 'ejs'); //telling express what templating engine you're using

app.use(require('./routes/index'));
app.use(require('./routes/aboutus'));
app.use(require('./routes/faq'));
app.use(require('./routes/city'))




//turn on server

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

