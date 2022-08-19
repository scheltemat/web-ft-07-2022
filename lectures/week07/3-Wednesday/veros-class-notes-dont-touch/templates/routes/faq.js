
const express = require('express');
const router = express.Router();  //sub route


router.get('/faq', (req, res) => { 

    res.send('faq')
})


module.exports = router

