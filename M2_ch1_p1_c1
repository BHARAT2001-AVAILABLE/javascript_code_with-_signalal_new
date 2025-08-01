// You are given an input array consisting of n integers ranging from 0 to 100, inclusive, where n represents the length of the array. Your task is to write a function that returns a new array of strings. Each string should consist of two elements joined by a space: an element from the input array paired with its geometrical mean with the 'opposite' element. The 'opposite' element of any element in the array is defined as the element at the corresponding position from the end of the array.

// Assume that the geometrical mean of two numbers, a and b, is calculated as: 
// a
// ⋅
// b
// a⋅b
// ​
//  .

// A few notes:

// If the length of the array, n, is odd, the middle element is considered to be its own 'opposite'.
// The elements of the input array will be in the range from 
// 0
// 0 to 
// 100
// 100, inclusive.
// Calculate the geometrical mean to two decimal places. For example, the geometrical mean of 
// 2
// 2 and 
// 8
// 8 is 
// 4.00
// 4.00 (since 
// 2
// ⋅
// 8
// =
// 4
// 2⋅8
// ​
//  =4).
// For example, for numbers = [1, 2, 3, 4, 5], the output should be solution(numbers) = ["1 2.24", "2 2.83", "3 3.00", "4 2.83", "5 2.24"].

// Reminders:

// Math.sqrt(x): Returns the square root of x.
// Math.round(x): Rounds x to the nearest integer.
// To round a number to two decimal places, you can use: Math.round(x * 100) / 100.
// Number.prototype.toFixed(d): Formats a number using fixed-point notation, keeping d digits after the decimal point.

function solution(numbers) {
    // TODO: implement this function
    let result = [];
    let n = numbers.length;
    
    for (let i = 0; i < n ; i++) {
        result.push(numbers[i] + " " +Math.sqrt(Math.round(numbers[i])*(numbers[n - i - 1]*100)/100).toFixed(2));
    }
    return  result;
}

console.log(solution([1,2,3,4,5]));
module.exports = { solution };

// [ '1 2.24', '2 2.83', '3 3.00', '4 2.83', '5 2.24' ]