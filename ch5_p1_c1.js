// Cosmo
// Read message aloud
// Modify the given JavaScript code to combine the astronaut's name and year of birth into a single string using array methods instead of using string concatenation with a loop. You should replace the loop inside the join function with the array join method. The aim of the code is to parse the given data in astronautsData into a more readable format.

// That’s totally understandable! Sometimes the wording can be tricky. Here’s a quick breakdown:

// The main goal was to replace the manual loop in the join function with the built-in array join method.
// This makes your code simpler and more “JavaScript-y.”
// You actually did it correctly!
// Is there a specific part of the question or the code that you found confusing? I can help clarify that for you.

function split(s, delimiter) {
    return s.split(delimiter);
}

// Modify this function to use array's join method.
function join(arr, delimiter) {
    // #TODO: Replace the following loop operations with array join method
    
    return arr.join(delimiter);
}

let astronautsData = "Buzz Aldrin,1930;Yuri Gagarin,1934;Valentina Tereshkova,1937";
let astronautsList = split(astronautsData, ";");
let cleanedAstronauts = [];

//  let tokens = astronautsData.split(";");
//  tokens.forEach(token => console.log(token));

astronautsList.forEach(function(astronaut) {
    cleanedAstronauts.push(join(split(astronaut, ","), " "));
    
});

// let result = token.join(" ");
// console.log(result);


cleanedAstronauts.forEach(function(cleanedAstronaut) {
    console.log(cleanedAstronaut);
    // Should output:
    // Buzz Aldrin 1930
    // Yuri Gagarin 1934
    // Valentina Tereshkova 1937
});