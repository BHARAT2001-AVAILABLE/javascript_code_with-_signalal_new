// Cosmo
// Just now
// Read message aloud
// Your task is to troubleshoot our spaceship's food inventory tracker. We need to calculate the total sum of various supply counts available for our crew's consumption. There seems to be an issue with the JavaScript program responsible for tallying the total supply sum, and it is not giving us the correct number. Can you pinpoint the error and fix the code to ensure we have an accurate sum of our supplies?

let supplies = [5, 3, 7, 2, 9];

// Calculate the total sum of the supplies
let totalSum = 0;

// Loop over each supply count in the supplies array
for (let supply of supplies) {
    totalSum += supply;
}

console.log(totalSum);  // This should print the total sum of the supplies