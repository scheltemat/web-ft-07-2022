
const fs = require('fs'); //core node module that allows to read and write to file system
const { Z_FIXED } = require('zlib');


let fileName = "sample.txt"
// fs.writeFile(fileName, "I love node", (error)=>{

//     if(error){
//         console.log(error.message);
//     }

//     console.log(`File saved at ${fileName}`);
// })

fs.unlink(fileName, (error)=>{

    if(error){
        console.log(error.message);
    }

    console.log(`${fileName} was deleted`);
})

fs.readFile("jibberish.txt", (error, buffer)=>{

    if(error){
        console.log(error.message);
        return;
    }

    console.log(`File Data: ${buffer.toString()}`);
})