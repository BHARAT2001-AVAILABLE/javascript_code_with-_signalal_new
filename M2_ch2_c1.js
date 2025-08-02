// % Introduction
// % Welcome to another exciting session! In today's lesson, we face a unique coding challenge. We will traverse the digits of a number using a while loop and a specific condition. You will hone your skills in working with loops and conditional statements, both of which are fundamental building blocks of programming. Shall we begin?

// % Task Statement
// % Our mission today is somewhat mind-twisting! We need to create a function that operates on an input integer to calculate the sum of its even-numbered digits. However, we won't convert this integer to a string at any point during this process. For example, given an integer n of value 4625, our output should be 12, which is the sum of the even digits 4, 6, and 2.

// % Remember, n will always be a positive integer that falls within the range from 1 to 100,000,000. Are you ready for the challenge? Awesome! Let's get started!

// % Solution Building: Step 1
// % We begin by setting up the basic structure for our function. In this step, we define a variable, digit_sum, that will accumulate the sum of the even digits.

// % Here's the initial framework of our function:

// % function solution(n) {
// %     let digit_sum = 0;
// %     // The function expands from here.
// % }


// % Step 2: Setting up the Loop
// % The most effective tool for iterating through the digits of n is a while loop. The loop will run as long as n is greater than zero. Integrating this into our function produces:

// % function solution(n) {
// %     let digit_sum = 0;
// %     while (n > 0) {
// %         // Further development of the function will proceed here.
// %     }
// % }


//  Step 3: Extracting and Processing Each Digit
//  Within our loop, we'll extract the last digit of n using the modulo operation (n % 10). If this digit is even, we add it to the digit_sum.

//  After we process a digit, we'll truncate the last digit of n using integer division (Math.floor(n / 10)). This step readies the while loop for the next digit.

//  This is what the final code looks like:

/*
function solution(n) {
    let digit_sum = 0;
    while (n > 0) {
        let digit = n % 10;
        if (digit % 2 === 0) {   // Check if the digit is even
            digit_sum += digit;
        }
        n = Math.floor(n / 10);  // Remove the last digit.
    }
    return digit_sum;
}

console.log(solution(4625));  // Output should be 12
*/


// lets practice this code with some examples:

function solution(n) {
    let digit_sum = 0;
    while (n > 0) {
        let digit = n % 10;
        if (digit % 2 === 0) {
            digit_sum  += digit;
        }
        n = Math.floor(n/10);
    }
    return digit_sum;
}

console.log(solution(4625));


