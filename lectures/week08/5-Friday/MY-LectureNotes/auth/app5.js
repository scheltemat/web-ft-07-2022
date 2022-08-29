
const express = require('express');
const app = express();
const cookieSession = require('cookie-session'); //persist data across diff routes

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cookieSession({ //req.cookiesession
    name: 'session',
    keys: ['asdfkjlasdl;kj'],
    maxAge: 14 * 24 * 60 * 60 * 1000 // 14 days in ms

}))


let users = [

    {username: 'Matt', password: '1234'}, 
    {username: 'Jake', password: '4567'}, 
    {username: 'Brandon', password: '8901'}, 
    {username: 'Jose', password: '1122'} 

]


app.get('/', (req, res) =>{

    res.render('index')
})


app.all('/admin/*', authLogin)


app.get('/admin/dashboard', (req, res) =>{

    res.render('dashboard')
})

app.get('/admin/users', (req, res) =>{

    res.render('users')
})

app.get('/admin/stats', (req, res) =>{

    res.render('stats')
})

app.get('/admin/metrics', (req, res) =>{

    res.render('metrics')
})

app.post('/login', (req, res) => {
    
    //username, password
    let {userID, password} = req.body; //scrapes info off of header form

    //check db for correct username, password
    let user = users.find(userRecord =>{
        
        return userRecord.username == userID && userRecord.password == password;
    })

    //place the user's id on the session

    if(user){ //object was returned into user variable and a match was found

        //place the user's id on the session
        req.session.isAuthenticated = true;
        res.redirect('/protected')
    }
    else{ //no user was found
        
        res.redirect('/')
    }
})

app.get('/protected', authLogin, (req, res) => {
    
    res.send('protected')
})

app.get('/regular', (req, res) => {
    
    res.send('hey everyone')
})

app.get('/logout', (req, res) => {

    req.session = null;

    res.redirect('/')
    
})


function authLogin(req, res, next){

    if(req.session.isAuthenticated){
        next()
    }
    else{
        res.redirect('/') //redirect user back to login form
    }
}


app.listen(3000, () => {
    
    console.log('sever started');
})