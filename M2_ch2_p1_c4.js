// You are tasked with writing a function that takes a positive integer n, as an input and returns the number of consecutive equal digits in the number. Specifically, your function should identify pairs of digits in n that are equal and consecutive and return the count of these pairs. Note that only pairs of two consecutive equal digits should be counted, and larger groups should be considered as multiple pairs.

// For instance, if n = 113224, it contains two groups of consecutive equal digits: 11 and 22. Therefore, the output should be 2. For n = 444, the output should also be 2, as there are two groups of 44 in this number.

// In cases where no consecutive equal digits are found, the function should return 0. For example, if n = 13579 or n = 345672, the output should be 0 as there are no groups of consecutive equal digits in these numbers.

function solution(n) {
    // TODO: implement
    let lastDigit =-1
    let result = 0;
     while (n > 0) {
        let digit = n % 10;
        if (digit===lastDigit){
        
        
        result+= 1;
        }
       n = Math.floor(n/10);
       lastDigit = digit
     }
     return result;
}
console.log(solution(112333))
module.exports = { solution };