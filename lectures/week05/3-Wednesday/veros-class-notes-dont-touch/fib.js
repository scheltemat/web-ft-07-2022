

let desks = [
    { type: 'sitting' }, //
    { type: 'standing' },//
    { type: 'sitting' }, //
    { type: 'sitting' },
    { type: 'standing' }
];
//{ sitting: 2, standing: 1 }

let deskTypes = desks.reduce((prev, curr)=>{

    // console.log(curr);
    curr.type == "sitting" ? prev.sitting+=1 : prev.sitting
    curr.type == "standing" ? prev.standing+=1: prev.standing 

    // console.log(prev);

    return prev
     
}, { sitting: 0, standing: 0 })

console.log(deskTypes);
  
// let deskTypes = desks.reduce(function() {
      
//   }, { sitting: 0, standing: 0 });


let arr = [1, 2, 3, 4] 
//                  |

let sum = arr.reduce((prev, curr)=>{

    return prev + curr //15
}, 5)

console.log(sum);