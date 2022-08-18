

const express = require('express'); //this is a function block

const app = express(); //instance of express


// create server and start

let port = 3000

app.get('/', (request, response)=>{
    
    response.send('<h1>Hello World</h1>')
})

app.get('/aboutus', (req, res)=>{
    res.send('<h1>About us</h1>')
})

app.get('/bat(wo)?man', (req, res)=>{
    res.send('batpeople')
})

app.get('/the(fancy)?cats?', (req, res)=>{
    res.send('cats')
})

app.get('/name', (req, res)=>{

    let firstName = req.query.fname
    let lastName = req.query.lname

    res.send(`<h1>${firstName} ${lastName} </h1>`)
})

app.get('/contact/:fname/:lastName', (req, res)=>{

    // let firstName = req.params.fname
    // let lastName 
    let {fname, lastName} = req.params

    res.send(`<h1>${fname} ${lastName}</h1>`)

})

app.get('/calculator/:num1/:num2', (req, res)=>{

    // let num1 = req.query.num1
    // let num2 = req.query.num2

    
    let {num1, num2} = req.params
    let sum = parseInt(num1) + parseInt(num2)

    res.send(`<h2>${num1} + ${num2} = ${sum} </h2>`)
    
})

let data = {data: [{
    id: 0,
    name: "Golden Retriever",
    
    img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
},
{
    id: 1,
    name: "Lab",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
},
{
    id: 2,
    name: "pug",
    img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
},
{
    id: 3,
    name: "poodle",
    img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
}
]}

app.get('/dog', (req, res)=>{

    let htmlFragment = ""

    let dogsArr = data.data

    dogsArr.forEach((obj)=>{
        htmlFragment += `
        
        <a href="${obj.id}"><h1>${obj.name}</h1></a>

        <a href="/dogs/${obj.id}"><img src="${obj.img}" width="400px"></a>
        
        `
    })

    res.send(htmlFragment)
})

app.get('/dogs/:id', (req, res)=>{

    let id = req.params.id;

    let name = data.data[id].name
    let img = data.data[id].img

    res.send(`
    
    <h1>${name}</h1>

        <ul>
            <li><a href="/dogs/0"> Golden Retriever</a></li>
            <li><a href="/dogs/1"> Lab</a></li>
            <li><a href="/dogs/2"> Pug</a></li>
            <li><a href="/dogs/3"> Poodle</a></li>
        </ul>

    <img src="${img}" width="400px">

    `)
})

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})

