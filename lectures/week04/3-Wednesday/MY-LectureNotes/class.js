

// let sum = (n1, n2)=> n1 + n2

// let result = sum(4, 6)
// console.log(result)



const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 - num2

const calc = (num1, num2, func) => {
    
    return func(num1, num2)
}

let result = calc(5, 6, subtract)

console.log(result);