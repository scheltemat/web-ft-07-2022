const express = require('express');
const router = express.Router()

const db = require('../models/database')

router.use(express.urlencoded({extended: false})); 
router.use(express.json());

router.get('/hack', (req, res) => { 

    res.render('hack')
})


router.post('/hack', async (req, res) => { 


    /**
     * SELECT * FROM dummy 
     * wHERE name = 'Veronia;'
     */
    try{
        let results = await db.query(`SELECT * FROM dummy WHERE name = '${req.body.name}'`)
        // let results = await db.query(`SELECT * FROM dummy WHERE name = 'Veronica'; DROP TABLE dummy;''`)

        res.json(results)
    }
    catch(error){
        console.log(error);
    }
 })


module.exports = router;