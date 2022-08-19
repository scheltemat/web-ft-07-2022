
const express = require('express');
const app = express();
const socket = require('socket.io');
let port = 3000;

app.set('view engine','ejs')


app.get('/', (req, res) => {

    res.render('index')
})

let server = app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})


let io = socket(server) //socket server

//io.on is an event listner
// sockets represents and individual connection
// io is our socket server
// emit sending a single message
//broadcase is sending message to everyone
io.on('connection', (socket)=>{

    socket.emit('msgFromServer', "Welcome to DC chat")

    //socket.on attaches an event lister to every client connection
    socket.on('msgFromClient', clientMsg=>{
        //broadcast the message from our client to all of the clients that are connected
        io.emit('msgFromServer', clientMsg)
    })

    console.log('a client has connected');

    socket.on('disconnect', reason=>{
        console.log('user has left the room');

        io.emit('msgFromServer', "User has left the room")
    })

})