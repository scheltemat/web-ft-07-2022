

// build a server and turn it on
// importing cor module from node.js library

const cow = require('cowsay');
const superhero = require('superheroes');

console.log(superhero.random());

let students = [
    {
        fName: "Victoria",
        city: "Atlanta"
    },
    {
        fName: "Andrew",
        city: "Atlanta"
    },
    {
        fName: "Stephen",
        city: "Houston"
    },
    {
        fName: "James",
        city: "Austin"
    },
    {
        fName: "Matt",
        city: "Seattle"
    },

]
const http = require('http');


// setup a server

const server = http.createServer((request, response)=>{

    // console.log(request);

    switch(request.url){

        case '/':

            response.setHeader('Content-Type', 'text/html')
            response.end(`<h1>Hello World</h1>`)
            break;

        case '/api': //localhost:3000/api

            response.setHeader('Content-Type', 'application/json') //sending json data to client

            let studentsJSON = JSON.stringify(students)

            response.end(studentsJSON)
            break;


        default:
            break;
    }


})


// turn our server on
// localhost:3000
// server.listen(3000, ()=>{

//     console.log(`server is running on port 3000`);
// })