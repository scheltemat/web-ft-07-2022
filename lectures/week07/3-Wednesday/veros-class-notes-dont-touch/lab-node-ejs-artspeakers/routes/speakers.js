const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');

let pageSpeakers = dataFile.speakers; //array of objects


//local:3000/speakers 
router.get('/speakers', (req, res) => { 
    

    // an array to hold all of the artwork 
    let pagePhotos = [];

    pageSpeakers.forEach(speakerObj =>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })

    res.render('speakers', {
        artwork: pagePhotos,  //array [.jpg, .jpg, .jpg, ]
        pageTitle: "Roux Meetups--Speakers", 
        speakers: pageSpeakers //[{},{}, {}, {}]
    }
    )
 })

//local:3000/speakers/lorenzo_garcia

//speakerID = lorenzo_garcia
router.get('/speakers/:speakerID', (req, res) => { 
    

    let shortName = req.params.speakerID ;

    let speaker = [] //[{}]
    let photos = [] 

    pageSpeakers.forEach(speakerObj =>{
        if(speakerObj.shortname == shortName ){
            speaker.push(speakerObj)
            photos = speakerObj.artwork
        }
    })

    res.render('speakers', {
        artwork: photos, 
        speakers: speaker, 
        pageTitle: `Roux Meetups--${speaker[0].name}`
    })


 })


module.exports = router;