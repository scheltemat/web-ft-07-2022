
// reverse a string

// function reverseString(str){

//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--){
//         newString += str[i];
//     }
//     return newString
// }

// console.log(reverseString('hello'));

// const reverseString = (str) => {

//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--){
//         newString += str[i];
//     }
//     return newString
// }

// console.log(reverseString('hello'));

// function sum(num1, num2) {

//     return num1 + num2

// }

// sum(9, 10)

function sumArr (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
console.log('array sum is: ', sumArr([1,2,3,4]));


// function changeDiv(){
//     let div = document.getElementById('submit')
//     div.innerHTML = "Hello World"
// }



let trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 },
    { distance: 83, time: 60 },
    { distance: 27, time: 15 },
    { distance: 68, time: 90 }
]

function printDistance(){
    for(let i = 0; i < trips.length; i++){
        console.log(trips[i].distance)
    }
}
printDistance()