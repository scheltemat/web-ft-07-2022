
// console.log('hello world')

// `
// this is a mulit
// line 
// string

// `


"hello" + "world"


// let variableName = 0;

//? STring interpolation


let firstName = "Veronica"
let lastName = "Lino"

let greeting = `My name is ${firstName} ${lastName}`


firstName.length

let word1 = "hello"
let word2 = "world"

let greeting2 = word1 + " there " + word2

// hello there world 
// 012

let result = greeting2.indexOf("world")

// console.log(result);

// true 
// false 

console.log(true || !false );

console.log(true && !false);

// let a = 4 
// let b = 2 

// console.log(a !== '4');

let a = 4 
let b = 2 

if (a == b){

}

let age = 23 

if (age >= 21){
   console.log('you get a free beer');
   console.log('you get a free beer');
}
else if (age <  18){
    console.log('what are you even doing here');
}
else {
    console.log('sorry no beer for you');
}


let fruit = "Papayas";

if(fruit == 'Oranges')
{
    console.log('Oranges are $0.59 a pound.');
}
else if(fruit == 'Mangoes')
{
}
else if(fruit == 'Papayas')
{
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
}
else
{
    console.log('Sorry, we are out of ' + fruit + '.');
}

let month = 9
if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    alert("This month has 31 days");
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    alert("This month has 30 days");
  } else if (month === 2) {
    alert("This month has 28 days");
  } else {
    alert("Unknown month!");
  }


switch() {

    case 1:
    case 2: 
    case 3: 
        console.log('this month has 30 days');
        break;
}

