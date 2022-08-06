// const isUnique = (arr) => {
//     let result = true;
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//         if (i !== j && arr[i] === arr[j]) { //test if they are the same
//           result = false;
//         }
//       }
//     }
//     return result;
//   };
//   console.log(isUnique([1,2,3]));
//   console.log(isUnique([1,1,3]));


// const isUnique = (arr) => {

//     // [3, 4, 6, 6, 7, 8, 9]
//     //           |
//     let cache = {}

//     for (let i = 0; i < arr.length; i++) {
      
//         if(cache[arr[i]]){ //looking things up
//             return false
//         }
//         else{
//             cache[ arr[i] ] = true;  //we're addign 
//             // cache[ arr[i] ] =value
//         }
//     }

//     console.log(cache);
//     return true

//   };
//   console.log(isUnique([1,2,3]));
//   console.log(isUnique([1,1,3]));


// const uniqSort = function(arr) {
//     const cache = {};
//     let uniqueArr = []
//     // [4,2,2,3,2,2,2]
//     //              |
//     //{4:true, 2:true, 3:true }
//     // [4, 2, 3]
//     for (let i = 0; i < arr.length; i++){  //O(n)

//         let currVal = arr[i] 

//         if(!cache[currVal]){
//             uniqueArr.push(currVal)
//             cache[currVal] = true
//         }

//     }

//     return uniqueArr.sort((a, b) => a - b);  //nlog(n)
// };
// let result = uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]
//     console.log(result);

// 6*5*4*3*2*1
// const factorial = (n) => {
    
//     return factorial
// }

// let cache ={5: }

// factorial(6)

// const cache =  {}
// const times10 = (n) => n * 10

// const memoTimes10 = (n) => {
    
//     if(n in cache){
//         console.log('Fecthin from cache', n);
//         return cache[n] //constant
//     }
//     else{
//         console.log('Calculate result');
//         cache[n] = times10(n)
//         return cache[n]
//     }

// }

// console.log(memoTimes10(9));
// console.log(memoTimes10(9));
// console.log(memoTimes10(9));
// console.log(memoTimes10(9));


// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const fib = (n) => {
    if (n <2) return n;

    const arr = [0, 1]

    for (let i = 2; i <= n; i++) {

        let a = arr[i-2]
        let b = arr[i-1]

        arr.push(a+b)
        
        
    }

    return arr

}

console.log(fib(45))


// (n-2) + (n-1)
// const fib = (n) => { 
    
//     //base case 
//     if( n < 2){
//         return n
//     }

//     return fib(n-1) + fib(n-2) 
// }

// console.log(fib(45))
