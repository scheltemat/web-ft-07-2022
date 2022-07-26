


// function hello(name) {
//     if (name = ""){
//         name = "world"
//     }
//     console.log(`Hello, ${name}!`);
// }
// hello();



function madlib(name, subject){
    console.log(`${name}'s favorite subject in school is ${subject}`);
}
madlib("Elyse", "math")




let good = 0.2
let fair = 0.15
let bad = 0.1

function tipAmount(bill, service){
    tip = bill * service
    console.log(tip);
}
tipAmount(100, good)



function totalAmount(bill, service){
    tip = (bill * service) + bill
    console.log(tip);
}
totalAmount(100, good)



function splitAmount(bill, service, numPeople){
    tip = (bill * service) + bill
    console.log(tip / numPeople);
}
splitAmount(100, good, 5)



function printNumbers(num1, num2){
    for (i = num1; i <= num2; i ++){
        console.log(i);
    }
}
printNumbers(1,10)



// function printSquare(sideLength){
//     let str = "*"
//     let space = " "

//     console.log(str.repeat(sideLength))

//     while (sideLength - 2 > 0){
//         console.log("*" + (space.repeat - 2) + "*")
//         sideLength -= 1
//     }

//     console.log(str.repeat(sideLength))
// }

// printSquare(5)



function printBanner(text){
    let str = "-"
    console.log(str.repeat(text.length))
    console.log(`- ${text} -`)
    console.log(str.repeat(text.length))
}
printBanner("Welcome to DigitalCrafts")



function leetSpeak(word){
    lst = word.split("")
    
    for (j = 0; j < lst.length-1; j++){
        if (lst[j] == "a"){
            lst[j] == "4"
        }
        else if (lst[j] == "e"){
            lst[j] == "3"
        }
        else if (lst[j] == "g"){
            lst[j] == "6"
        }
        else if (lst[j] == "i"){
            lst[j] == "1"
        }
        else if (lst[j] == "o"){
            lst[j] == "0"
        }
        else if (lst[j] == "s"){
            lst[j] == "5"
        }
        else if (lst[j] == "t"){
            lst[j] == "7"
        }
        else{
            return lst;
        }
    }
    console.log(lst)
}
leetSpeak("leet")