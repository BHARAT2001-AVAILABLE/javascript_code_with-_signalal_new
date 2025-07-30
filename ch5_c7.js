// Integrating String Tokenization and Type Conversions
// In some cases, we may need to combine all the methods discussed:
/*
let numbers = "1,2,3,4,6";
let numArray = numbers.split(",");
let sum = 0;

numArray.forEach(numStr => {
    sum += parseInt(numStr);
});

let average = sum / numArray.length;
console.log("The average is " + average);  // Output: The average is 3.2
*/
// By integrating these methods, we can transform the string 1,2,3,4,6 into an array of integers, calculate their average, and display the result.


let numbers = "1,2,3,4,6";
let numArray = numbers.split(",");
let sum = 0;
numArray.forEach(numStr => {
   sum += parseInt(numStr);
});
let average = sum / numArray.length;
console.log("The average is " + average);