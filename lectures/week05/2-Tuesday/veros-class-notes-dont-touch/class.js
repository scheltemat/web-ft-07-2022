
// const PI = 3.14

// const arr = [1, 2, 3, 4]



  
// arr = {}
// // arr.push(5)

// console.log(arr);

// let i = 0; //window.i

// for (let i = 0; i < 5; i++) {
    
//     // some stuff
    
// }



// console.log(i);


// let str = `

// lskdfj 
// sldkfjs 
// lskdfjs
//  lkjsdfs


// `

// console.log(str);


// let date = new Date();

// let text = `Our current time ${date.toLocaleString()}`

// console.log(text);

// let arr = [34, 45, 56, 67]

// let [a, b] = arr

// console.log(a, b)

// a + b

// let a = 1 
// let b = 5;

// [a, b] = [b, a]

// console.log(`a = ${a}  b = ${b}`);

// let temp; 

// temp = b ; //5 

// b = a; // b=1 

// a = temp // a = 5

// let arr1 = [99, 29, 39, 29, 49, 79]; 
// let arr2 = [1, 2, 3, 4, 5, 6, 7];

// [arr1[0], arr2[0]] = [arr2[0], arr1[0]]

// console.log(arr1, arr2);

let age = 16 

// if (age >= 21){
//     console.log('beer');
// }
// else{
//     console.log('juice');
// }

// let beverage = age >= 21 ? "Beer" :"Juice"

// console.log(beverage);


// console.log(`${age>=21? console.log('beer') : console.log('Juice')}`);

// const greeting = (person) => {

//     let name = person ? person.name : 'stranger'

//     return `Howdy, ${name}`
    
// }

// console.log(greeting({name: `Alice`}));
// console.log(greeting());

let fruit = "Mango"

// if(fruit == "Oranges"){
//     console.log('I am an orange');
// }
// else if(fruit == "Lemons"){
//     console.log("this is lemon");
// }
// else if(fruit == "Mango"){
//     console.log("Mangos are my favorite fruit");
// }
// else{
//     console.log(`can't find your fruit`);
// }

// let fruitSelection = fruit == "Oranges" ? 'I am an orange' 
//                              : fruit == "Lemons" ? "this is lemon"  
//                              : fruit== "Mango" ? "Mangos are my favorite fruit" 
//                              :  `can't find your fruit`

// console.log(fruitSelection);

// let obj;
// let arr = [1]

// if (NaN){
//     console.log('hello');
// }


// function addTwoNumbers(x=0, y=0) {  //[0, 0]
//     // x = x || 0;
//     // y = y || 0;
//     return x + y;
// }

// let result = addTwoNumbers()

// console.log(result);

// function logArguments() {
//     for (var i=0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }


// logArguments(1, 2, 3, 4)  //[1, 2, 3, 4]

function logArguments(...args) {

    for (var i=0; i < args.length; i++) {
        console.log(args[i]);
    }
}

logArguments(1, 2, 3, 4)  //[1, 2, 3, 4]