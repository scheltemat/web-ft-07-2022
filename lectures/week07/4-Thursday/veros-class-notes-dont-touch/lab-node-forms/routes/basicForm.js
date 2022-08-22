const express = require("express");
const router = express.Router();

router.get('/basic', (req, res)=>{

    res.render("basicForm")
})

router.get('/submit', (req, res) => { 
    
    const {firstName, lastName} = req.query; 

    // let firstName = req.query.firstName 
    // let lastName = req.query.lastName


    res.send(`submittied form ${firstName} ${lastName}`)
 })

router.post('/submit', (req, res) => { 
    ///?????
    
    const {firstName, lastName} = req.body //store data somewhere
    // let firstName = req.body.firstName 
    // let lastName = req.body.lastName
    res.send(`posted data to our server ${firstName} ${lastName}`)
 })



module.exports = router;