
const express = require('express');
const app = express();

// app.use(logger)


// app.get('/', (req, res, next) => {
    
//     console.log('inside of route');
//     console.log(req.mySession);
//     res.send('home page')
//     next()
// })

// app.get('/admin', (req, res) => {
    
//     console.log('inside of route');
//     res.send('home page')
// })

// app.use(admin)


// //middleware function
// function logger(req, res, next){

//     req.mySession = "Thomas"
//     console.log('Log');
//     next();
// }

// function admin(req, res, next){

//     console.log('inside of admin function');
//     next();
// }

let count = 0;

app.use(countLog) // 1st

app.use(passport) //isAuthenticate is going to be on the request object

app.get('/', (req, res, next) => { // 2nd

    res.send('home page')
    next()
})


app.get('/dashboard', auth, (req, res, next) => {

    res.send('dashboard')
    next()
})

app.get('/error', (req, res) => {

    res.send('you are not authenticated. Please log in or register')
})

app.use(printCurrentLog) // 3rd


function auth(req, res, next){

    if(req.isAuthenticated){
        next();
    }
    res.redirect('/error')
    // console.log('user is valid');
    // next();
}

function passport(req, res, next){

    req.isAuthenticated = false;
    next();
}

function countLog(req, res, next){

    count++;
    next()
}

function printCurrentLog(req, res, next){

    console.log(count);
}


app.listen(3000, ()=>{
    console.log(`listening on port 3000`);
}) 