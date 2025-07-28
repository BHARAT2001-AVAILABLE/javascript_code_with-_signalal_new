// JavaScript language, making use of if statements alongside break and continue to control the flow of our loops. You are going to define a list of temperature readings and then iterate over this list, applying the relevant checks and statements as instructed. Let's begin!

// Ensure you write the entire loop and conditions from scratch as part of this task.

// TODO: Define an array of temperatures
const temperatures = [19, 15, 13, 23, 27, 31] 
// TODO: Write a loop to go through each temperature in the array
for (temp of temperatures) {
// TODO: Add an 'if' statement to check if the temperature is over 30
    // TODO: Print a message for being really hot and then exit the loop
    if (temp > 30) {
        console.log("Its very Hot outside.");
        break;
    }
// TODO: Add an 'else if' condition before the general temperature message to check if the temperature is below 15
    // TODO: For temperatures that are too cold, print a specific message and skip to the next one
     else if (temp < 15) {
        console.log("It so chill outside.");
        continue;
     }
// TODO: Print a message saying the temperature is nice for all other cases
   console.log("Its a lovely weather outside.");
}