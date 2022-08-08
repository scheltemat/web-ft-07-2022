

const uniqSort = function(arr){
    const cache = {};
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++){ // 0(n)
        let currVal = arr[i]

        if(!cache[currVal]){
            uniqueArr.push(currVal)
            cache[currVal] = true
        }
    }

    return uniqueArr.sort((a, b) => a - b); // nlog(n)

};

let result = uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]
console.log(result);


const cache = {}
const times10 = (n) => n * 10

const memoTimes10 = (n) => {
    if(n in cache){
        console.log("fetching from cache", n);
        return cache[n] //constant
    }
    else{
        console.log('Calculate result');
        cache[n] = times10(n)
        return cache[n]
    }
}

console.log(memoTimes10(9));
console.log(memoTimes10(9));
console.log(memoTimes10(9));
console.log(memoTimes10(9));


// const fib = (n) => {
//     if (n < 2) return n;

//     const arr = [0, 1]
    
//     for (let i = 2; i <= n; i++){

//         let a = arr[i - 2]
//         let b = arr[i - 1]

//         arr.push(a + b)
//     }

//     return arr
// }

// console.log(fib(90));


const fib = (n) => {
    if(n < 2){
        return n
    }
    return fib(n-1) + fib(n-2)
}

console.log(fib(40));