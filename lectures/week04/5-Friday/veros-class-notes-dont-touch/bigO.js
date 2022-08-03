function addUpTo(n) {
    let total = 0;
    for (let i = 1; i<=n; i++){
        total += i;
    }
    return total
}
//Checkpoint 1 (start the timer)
let t1 = performance.now(); 
//call the function
addUpTo(1000000000);
//Checkpoint 2 (stop the timer)
let t2 = performance.now(); 
//Calculate the time difference
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`) //difference between the 2 times

// memoization 
// caching 



const count = () => { 


    for (let  x = 0; x < 10; x++) {
        
        
        for (let y = 0; y < 5; y++) {
            
            console.log(x, y)
            
        }
        
    }
 }