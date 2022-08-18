const express = require('express');
const router = express();

router.get('/aboutus', (req, res) => {

    res.send('aboot us')  
})

module.exports = router