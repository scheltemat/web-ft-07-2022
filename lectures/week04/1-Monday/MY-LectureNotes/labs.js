
// a;sjdfk;


let firstName = "Thomas"
let lastName = "Scheltema"

console.log(firstName + " " + lastName);



let a = 4
let b = 5

let sum = a + b

console.log(`the sum of a + b = ${sum}`);



let name = firstName + " " + lastName

console.log(name.indexOf(lastName))



let num1 = 5
let num2 = 3

if (num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
}
else if (num1 < num2){
    console.log(`${num1} is less than ${num2}`);
}
else{
    console.log(`${num1} is equal to ${num2}`);
}




// if (
//     month === 1 ||
//     month === 3 ||
//     month === 5 ||
//     month === 7 ||
//     month === 8 ||
//     month === 10 ||
//     month === 12
//   ) {
//     alert("This month has 31 days");
//   } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     alert("This month has 30 days");
//   } else if (month === 2) {
//     alert("This month has 28 days");
//   } else {
//     alert("Unknown month!");
//   }

let month = 9
let numDays = 31


switch(month){
    case 4: 
    case 6: 
    case 9: 
    case 11: 
        numDays = 30; 
        break; 
    case 2: 
        numDays = 28; 
        break; 
    default:
        break;
}

console.log(`this month has ${numDays} days`);


// let count = 1

// while (count <= 20){
//     count = count + 1
//     if (count % 2 == 0){
//         console.log(count)
//     }
// }


for (i = 1; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}


for (j = 1; j <= 30; j++){
    if (j % 15 == 0){
        console.log("fizz buzz")
    }
    else if (j % 5 == 0){
        console.log("buzz")
    }
    else if (j % 3 == 0){
        console.log("fizz")
    }
    else{
        console.log(j)
    }
}



let str1 = "javascript";

strArr = str1.split('');

for (k = 0; k < strArr.length; k++){
    if ((k+1) % 2 == 0){
        strArr[k] = "Z"
    }
}
str1 = strArr.join('')

console.log(str1)



function add (num3, num4)