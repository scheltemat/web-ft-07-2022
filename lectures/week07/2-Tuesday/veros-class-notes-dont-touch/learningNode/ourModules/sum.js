// reduce
const sum = (arr) => {
    
    let sumArr = arr.reduce((prev, curr)=>{

        return prev + curr
    }, 0)

    return sumArr
}

// for loop
const sumAlt = (arr) => {
    
    let sum = 0;
    for(let i = 0; i< arr.length; i++){

        sum += arr[i]
    }

    return sum
}

//for of for in 

const sumAlt2 = (arr) => {
    let sum = 0

    for(currVal in arr){
        sum += currVal
    }

    return sum
}

const multiply = (arr) => {
    
    return arr.reduce((prev, curr)=>{

        return prev * curr;
    }, 1)
}

let math = {
    sum: sum, 
    multiply: multiply
}

module.exports = math;