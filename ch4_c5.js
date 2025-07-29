// Implementing custom functions to check the case of characters:
/*
function isLowerCase(char) {
    return char === char.toLowerCase() && char !== char.toUpperCase();
}

function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
}

console.log("Is 'a' lowercase? " + isLowerCase('a'));  // Prints: true
console.log("Is 'B' lowercase? " + isLowerCase('B'));  // Prints: false

console.log("Is 'a' uppercase? " + isUpperCase('a'));  // Prints: false
console.log("Is 'B' uppercase? " + isUpperCase('B'));  // Prints: true
*/
// In both functions, the && operator (logical AND) ensures that both conditions must be true for the function to return true. For example, in the isLowerCase function, it checks that the character equals its lowercase version (char === char.toLowerCase()) and that it does not equal its uppercase version (char !== char.toUpperCase()). Without the second condition, non-alphabetic characters would also be considered lowercase letters. Both conditions must be satisfied to confirm that the character is indeed lowercase.

function isLowerCase(char) {
    return char === char.toLowerCase() && char !== char.toUpperCase();
} 

function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
}

console.log("Is 'B' uppercase ? " + isUpperCase('B')); //prints: true
console.log("Is 's' uppercase ? " + isUpperCase('s'));

console.log("Is 'a' lowercase ? " + isLowerCase('a'));
console.log("Is 'K' upperCase ? " + isLowerCase('K'));