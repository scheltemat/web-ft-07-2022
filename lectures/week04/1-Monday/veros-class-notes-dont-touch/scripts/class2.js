

// let fruit = "Papayas";

// switch(fruit){

//     case 'Oranges': 
        
//     case 'Mangoes':
//         console.log('Mangoes are $0.50 a pound.');
//         break;
//     case 'Papayas':
//         console.log('Mangoes and papayas are $2.79 a pound.')
//         break; 

//     default: 
//         console.log(`sorry we're out of that fruit`);

// }


let month = 7 

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