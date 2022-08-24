const express = require('express');
const router = express.Router(); 
const db = require('../models/database')  //database instance


//allows us to scrape data off of header
router.use(express.urlencoded({extended: false})); 
router.use(express.json());

router.get('/newdish', async (req, res) => { 

    try{

        let records = await db.query('SELECT * FROM categories'); //[{}, {}, {}, {}]

        res.render('newDish', {
            categories: records
        })
    }
    catch{

        res.render('newdish', {
            categories: []
        })
    }
    
 })

// collect dat from form
 router.post('/newdish', async (req, res) => { 


    try {
        let {name, description, price, course, imageURL , category  } = req.body; //names of keys on form

        category = parseInt(category) //convert string to integer 

        price = parseFloat(price);


        //store our information in our database

        let result = await db.result(`INSERT INTO menuitem (name, category, fooddescription, price, course, imageurl) VALUES ($1, $2, $3, $4, $5, $6)`, 
        [name, category, description, price, course, imageURL  ])

        res.redirect('/')
    } 
    catch(error){
         
        console.log(error);
    }

  })


module.exports = router;

