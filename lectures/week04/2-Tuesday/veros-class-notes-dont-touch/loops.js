
// let word = 'l o v e'
        //  


/**
 * l
 * o
 * v
 * e
 */

// for(let i = 0; i<word.length; i++){
//     console.log(word[i])
// }


let str2 = "don’t know why";
let haveY = false

// loop through each letter of string 
// if statement (is y in this string?)
// if statement inside of loop 
// once we find y, print true 


for(let i = 0; i< str2.length; i++){

    // console.log(str2[i])
    if(str2[i] == 'y'){
        haveY = true
    }
    
}


if(haveY == true){
    console.log('yes')
}
else{
    console.log('no')
}


