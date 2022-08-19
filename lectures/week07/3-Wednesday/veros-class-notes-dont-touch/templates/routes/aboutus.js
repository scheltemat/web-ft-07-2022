
const express = require('express');
const router = express.Router();  //sub route


router.get('/aboutus', (req, res) => { 

    res.send('about us')
})


module.exports = router

