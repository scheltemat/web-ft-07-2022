const express = require('express');
const router = express();

router.get('/faq', (req, res) => {

    res.send('faq')  
})

module.exports = router