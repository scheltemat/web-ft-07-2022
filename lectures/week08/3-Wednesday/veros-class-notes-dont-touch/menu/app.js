/**
 * install express
 * install ejs 
 * setup app.js 
 * setup views folder 
 * setup routes folder with 1 route to the home page : index.js
 */

const express = require('express');
const app = express();

const db = require('./models/database');  //instance of our db connection

console.log(db);
const port = 3000;

app.set('view engine', 'ejs')

app.use(require('./routes/index'));
app.use(require('./routes/newDish'))
app.use(require('./routes/hack'))

// db.query('SELECT * FROM categories')
// .then(results =>{  // [{}, {}, {}, {}, {}]

//     console.log(results);
// })

const categories = async () => {
    
    let results = await db.query('SELECT * FROM categories'); //[{}, {}]

    // loop through and get the name of each category

    // for 
    // console.log(`for loop`);
    // for (let i = 0; i < results.length; i++) {

    //     console.log(results[i].name);
        
    // }

    // for of 
    console.log('using for of');
    for (let category of results){

        console.log(category.name);
    }
    // foreach 

    // results.forEach(category =>{
    //     console.log(category.name);
    // })

}

// categories()


const insertCategoryItem = async (categoryName) => {
    
    // let results = await db.result(`INSERT INTO categories VALUES (DEFAULT, '${categoryName}')`)


    // sanitize our inserts

    let results = await db.result(`INSERT INTO categories VALUES (DEFAULT, $1)`, [categoryName])


    console.log(results);

}


// insertCategoryItem('Moroccan')

app.listen(port, ()=>{
    console.log(`running on port ${port}`);
})


