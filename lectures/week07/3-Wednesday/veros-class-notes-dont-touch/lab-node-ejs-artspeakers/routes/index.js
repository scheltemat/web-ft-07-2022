
const express = require('express');
const router = express.Router();

//import data from data.json 
const dataFile = require('../data/data.json'); //node when import json file, it will conver it to js 

// dataFile = {speakers: [{}, {}, {}]}

// console.log(dataFile.speakers);

let pageSpeakers = dataFile.speakers  //an array of speakers

router.get('/', (req, res) => { 
    

    // an array to hold all of the artwork 
    let pagePhotos = []

    // [[],[],[]]

    pageSpeakers.forEach(speakerObj =>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })

    // console.log(pagePhotos);

    res.render('index', {
        artwork: pagePhotos
    })
 })

module.exports = router;