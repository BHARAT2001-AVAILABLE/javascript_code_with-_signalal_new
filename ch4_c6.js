// Checking whether a character is a letter, digit, or alphanumeric using regular expressions:

/*
function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

function isDigit(char) {
    return /^[0-9]$/.test(char);
}

function isLetterOrDigit(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}

console.log(isLetter('C'));  // Prints: true
console.log(isLetter('+'));  // Prints: false

console.log(isDigit('9'));  // Prints: true
console.log(isDigit('D'));  // Prints: false

console.log(isLetterOrDigit('6'));  // Prints: true
console.log(isLetterOrDigit('k'));  // Prints: true
console.log(isLetterOrDigit('?'));  // Prints: false
*/

function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

function isDigit(char) {
    return /^[0-9]$/.test(char);
}

function isLetterOrDigit(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}

console.log(isLetter('a'));
console.log(isLetter('8'));

console.log(isDigit(7));
console.log(isDigit('+'));

console.log(isLetterOrDigit(6));
console.log(isLetterOrDigit('K'));
console.log(isLetterOrDigit('@'));