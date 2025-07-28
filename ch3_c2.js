// The 'break' Statement
// We use the break statement whenever we want to exit a loop prematurely once a condition is met:
/*
const numbers = [1, 3, 7, 9, 12, 15];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log("The first even number is: " + numbers[i]); // This prints the first even number.
        break; // This stops the loop after printing the first even number.
    }
    console.log("Number: " + numbers[i]);
}
*/
// Output:
// Number: 1
// Number: 3
// Number: 7
// Number: 9
// The first even number is: 12

// practice
/*
const numbers = [1,3,5,7,8,9];

for (let i = 0 ; i < numbers.length ; i++ )  {
    if ( numbers[i] % 2 === 0 ) {
        console.log("Its the first even no " + numbers[i]);
        break;
    }
 console.log("number is " + numbers[i]);
}
*/

const numbers = [1,3,5,7,13,14,17,11,18];

for (let i = 0; i < numbers.length ; i++){
    if ( numbers[i] % 2 === 0) {
        console.log("The first even no is: " + numbers[i]);
        break;
    } 
    console.log("other number: " + numbers[i]);
}