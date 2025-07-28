// Topic Overview
// Welcome! In this lesson, we're exploring special instructions in the JavaScript language: Conditional Statements, along with the break and continue statements. As we've learned, loops allow us to execute a block of code numerous times. By combining these loops with conditional statements and incorporating the useful break and continue instructions, we achieve more robust and efficient code. Let's dive in!

// The 'if' Statement
// In JavaScript, the if statement triggers actions in our code based on a specific condition. Consider this straightforward example, where the if statement determines which message to print based on the value of temperature:
/*
let temperature = 15;
if (temperature > 20) {
    console.log("Wear light clothes."); // This message will print if the temperature is over 20.
} else {
    console.log("Bring a jacket."); // This message will print otherwise.
}
// Output: Bring a jacket.
*/
// We can evaluate multiple conditions using else if. This phrase means, "If the previous condition isn't true, then check this one":
/*
let temperature = 15;

if (temperature > 30) {
    console.log("It's hot outside!"); // This will print if the temperature is over 30.
} else if (temperature > 20) {
    console.log("The weather is nice."); // This will print if the temperature is between 21 and 30.
} else {
    console.log("It might be cold outside."); // This will print if the temperature is 20 or below.
}
    */
// Output: It might be cold outside.


// practice = 

// let temperature = 12;

// if (temperature > 25){
//     console.log("its warm outside");
// }  else {
//     console.log("its cool for every one");
// }


// practice

let temperature = 13;

if (temperature > 30) {
    console .log("its too hot outside");
}else if (temperature > 20) {
    console.log("its ok outside"); 
}else {
    console.log("its a cold weather");
}