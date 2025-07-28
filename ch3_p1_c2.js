// In our weather display program, we want to refine the output according to the day's temperatures. Complete the given JavaScript code so that it outputs clothing recommendations based on temperature readings.

const temperatures = [16, 21, 20, 14, 22, 19, 13];

for (let temp of temperatures) {
    // TODO: Print "It's really hot." and exit the loop if temperature is above 30
    if (temp > 30) {
        console.log("Its really hot");
    }
    // TODO: Print "It's quite chilly." and skip to the next iteration if temperature is below 20
    
    else if (temp < 20) {
        console.log("Its quite chilly");
        continue;
    }
    console.log("Lovely weather.");
}