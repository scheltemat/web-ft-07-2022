
/* slkjfsld
s,dkfj☠  */


// 1. create variable firstName  
// 2. create variable lastName 
// 3. print your first name concatenated with your last name to the command line

// node class.js 


// let firstName = "Veronica"
// let lastName = "Lino"

// console.log(firstName + " " + lastName);


// let a = 4 
// let b = 5 

// let sum = a + b 

// the sum of a + b = 9 

// console.log(`the sum of a + b = ${sum}`);

//print length of first name and length of lastname  and then add the two together

// let name = firstName + " " + lastName


// let num1 = 5 
// let num2 = 3

// write a program that compare the value 
// num1 > num2 
    // num1 is greater than num2 
    // i.e. 5 is greater than 3 
// num1 < num2 
    // num1 is less than num2 

//default: 
    // num1 is equal to num2

// let arr = [11, 21, 31, 41]  

// arr[0]  arr[index = 0]
// arr[1]   arr[index = 1]
// arr[2]  arr[index = 2]
// arr[3] arr[index = 3]


// let index = 0 


// while (index < arr.length ){

//     console.log(index);  // 0, 1, 2, 3
//     // console.log(arr[index])
    
//     index = index + 1;

// }

// let count = 0
// while (count < 10){ // 12 < 10

//     console.log(count);
//     count = count + 3 // count = 9 + 3 = 12
// }


// let arr = [23, 4, 5, 6]

// for (let count = 0; count <= 10; count++) 
// {
//         console.log(count);
// }




//for and while 

// for the numbers 1 - 20 print all the even numbers 
// %    num %2 ==0 


// FizzBuzz
// Use a for loop to print out all the numbers 1 to 30, but insert the word fizz for any number that is divisible by 3, insert the word buzz for any number that is divisible by 5 and insert the word fizz buzz for any numbers that are both divisible by 3 and 5, like 15.

// CRUD 

// let arr1 = []
// let arr = [4, 5, 7, 8, 23]
//         0  1  2  3  4  


// arr1[1:4]
// let newArr = arr.slice(1, 4)

// console.log(newArr);
// console.log(arr);

// arr.splice(0, 2)

// console.log(arr);

// arr.unshift(99)
// arr.shift()

//jeans 
//genes 

// console.log(arr);
// arr[4]

// arr[2] = 99

// delete arr[8]

// console.log(arr);

// append

// arr.push(99)

// arr.pop()
// console.log(arr);


//  int("44") 

// let arr = [1 ,2, 3, 4, 5]
// arr[0] = 99
// console.log(arr);

let str = "Veronica"
str[0] = "b"

// console.log(str);

let str_arr = str.split('')
// console.log(str_arr);
str_arr[0] = 'b'
// console.log(str_arr);

str = str_arr.join('')
// console.log(str);

// console.log(str[str.length -1])
// jZvascript
// jZvZsZrZpZ

// (i+1) % 2 == 0

// let myObj = {
//     firstName : "Veronica", 
//     lastName : "Lino"
// }

// let result = myObj["firstName"]
// result = myObj.lastName
// // console.log(result);

// myObj.lastName = "Taucci"

// // console.log(myObj.lastName);

// myObj.city = "Naples"


// delete myObj.firstName

// console.log(myObj);


function myFunction(){
    console.log("hello world");
}

myFunction()

let addNums = (num1, num2) => {

    return num1 + num2
}

let result = addNums(43, 5)

console.log(result);

const add = (num1, num2) => num1 + num2;

console.log(add(4, 5));

