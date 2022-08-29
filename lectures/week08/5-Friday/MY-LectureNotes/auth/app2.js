
const express = require('express');
const app = express();

const cookieSession = require('cookie-session');

let port = 3000;
//session and a cookie

//install cookie-session

app.use(cookieSession({
    name: 'session',
    keys: ['asdfasdfasdfasdf'],
    maxAge: 14 * 24 * 60 * 60 * 1000 // time in ms (14 days * 24hrs * 60mins * 60secs * 1000ms)
}))

//req.session


app.get('/', (req, res) => {
    
    req.session.fName = "Christian" //place this on the cookie
    res.send('home page')
})


app.get('/protected', (req, res) => {

    console.log(req.username);
    res.send(`protected ${req.session.fName}`)
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})