
const sum = (arr) => {

    let sumArr = arr.reduce((prev, curr)=>{

        return prev + curr
    }, 0)
    return sumArr
}

const sumAlt = (arr) => {

    let sum = 0
    for(let i = 0; i < arr.length; i++){

        sum += arr[i]
    }
    
    return sum
}

const sumAlt2 = (arr) => {

    let sum = 0
    for (val in arr){
        sum += currVall
    }
    
}

const multiply = (arr) => {

    let mult = 1
    for(let i = 0; i < arr.length; i++){
        mult *= arr[i]
    }
    return mult
    
}

let math = {
    sum: sum,
    multiply: multiply
}

module.exports = math;