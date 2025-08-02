// Your task is to construct a function that accepts an integer n and returns the integer with the same digits as n, but in reverse order. You should implement your solution using a while loop.

// For instance, if the input is 12345, the output should be 54321.

// Keep in mind that n will always be a positive integer between 
// 1
// 1 and 
// 10
// 8
// 10 
// 8
//  .

// Do not use built-in functions that convert the integer to another data type, such as a string, to reverse it. Solve the problem purely using mathematical operations and loop constructs. Note that when the result has leading zeros, you should consider only the integer value (e.g., 1230 becomes 321 after the operation).


function solution(n) {
    // TODO: implement the solution here
    
    let digit_reversed = 0;
    while (n > 0) {
        let digit = n % 10;
        digit_reversed = (digit_reversed*10) + digit;
        n = Math.floor(n / 10)
     }
    return digit_reversed
}
console.log(solution(12345));
module.exports = { solution };