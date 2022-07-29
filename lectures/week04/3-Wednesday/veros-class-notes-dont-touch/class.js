
// let a = 5

// function someFunction(parm1, parm2){

//     return "hello world"
// }

// let result = someFunction()

// console.log(result);

// let a = 5
// let result = sum(4, 5)
// console.log(result);

// function sum2(num1, num2){
//     return num1 + num2
// }

//hoisting



// let sum = function(num1, num2){
//     return num1 + num2
// }

// let result = sum(a, 6)
// console.log(result);


// (function(a, b){
//     console.log('hello world');

//     console.log(a + b);
// })(4, 5)

// let a = 5 
// let b = a 
// b = 3
// console.log(a, b);


// let arrA = [4, 5, 6, 7] 
// let arrB = arrA

// arrB.push(99)
// console.log(arrA, arrB);

// let outside = {
    
//     num: 44
// } 

// function testFunction(obj ){

//     obj.num += 22
// }

// testFunction(outside)

// console.log(outside);


// let globalVariale = "global"


// function scope(){
//     let localVar = "local"
//     let globalVariale = 8
//     console.log(localVar, globalVariale);
// }

// // console.log(localVar);

// scope()

// this 


// let sum = (n1, n2)=> n1 + n2

// let result = sum(4, 6)
// console.log(result);

// const pi = 3.14 

// pi = 3.0
// console.log(pi);

// const arr = [1, 2, 3, 4, 5]

// arr[0] = 99
// arr.push(2022)
// // arr = {
// //     key: 3
// // }

// console.log(arr);


// const name = (params) => {
    
// }

// const obj = {
//     key : 4
// }

// obj["key2"] = 5

// obj.key3 = 6

// obj = []

// console.log(obj);


// let x = 1; 

// if(x === 1){
//     let x = 2
// }

// console.log(x);


// let i = 1 


// for(let i = 0; i<10; i++){
    
// }


// console.log(i)
// 10

const add = (num1, num2) => num1 + num2


const subtract = (num1, num2) => num1 - num2 



const calc = (num1, num2, func) => { 

    // num1 + num
    let result = func(num1, num2)  //executing the subtract function

    return result
}


let result = calc(5, 6, subract)

console.log(result)

