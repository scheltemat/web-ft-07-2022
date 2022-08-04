
// The Fibonacci numbers are the numbers in the following integer sequence.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..


function fib(n){
    const nums = [0, 1]
    for (let i = 2; i < n; i++){
        nums[i] = nums[i - 1] + nums[i - 2]
    }
    return nums
}
console.log(fib(10));



