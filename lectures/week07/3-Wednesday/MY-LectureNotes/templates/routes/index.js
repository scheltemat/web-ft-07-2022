
const express = require('express');
const router = express();


router.get('/', (req, res) => {

    // res.send('home page')
    
    res.render('index', {
        firstName: "Thomas",
        lastName: "Scheltema",
        year: 2022,
        nums: [1,2,3,4],
        contacts:{year: 2022}
    }) //rendering a view (template)
    //second argument of render is how we pass info to our template
    //strings, int, bool, objects, etc
})


module.exports = router