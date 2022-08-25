
const express = require('express');
const app = express();

const db = require('./models/database'); // instance of our db connection

let port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(require('./routes/index'));
app.use(require('./routes/newDish'));


// db.query('SELECT * FROM categories')
// .then(results =>{   //[{}, {}, {}, {}]
//     console.log(results);
// })

const categories = async () => {

    let results = await db.query('SELECT * FROM categories'); //[{},{}]

    results.forEach(category => {

        console.log(category.name);
        
    });
}

// categories()

const insertCategory = async (categoryName) => {
    
    // let results = await db.result(`INSERT INTO categories VALUES (DEFAULT, '${categoryName}')`)

    // sanitize our inserts

    let results = await db.result(`INSERT INTO categories VALUES (DEFAULT, $1)`, [categoryName])

    console.log(results);
}

// insertCategory('Moroccan')

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})


