
const fs = require('fs'); //core node module that allows to read and write to file system


// let fileName = "sample.txt"

// fs.writeFile(fileName, "I love node", (error)=>{

//     if(error){
//         console.log(error.message);
//     }

//     console.log(`File saved at ${fileName}`);
// })

fs.readFile('preamble.txt', (error, buffer)=>{

    if(error){
        console.log(error.message);
        return;
    }

    console.log(`File Data: ${buffer.toString()}`);
})