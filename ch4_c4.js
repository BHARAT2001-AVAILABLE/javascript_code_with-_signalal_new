// Character Operations
// Let's now explore character operations in JavaScript. String methods such as toUpperCase() and toLowerCase() are used to change the case of a character. Additionally, we can create custom functions to check whether a character is lowercase or uppercase.

// Using toUpperCase() and toLowerCase() to change the case of characters:

/*
let s = "mark";
let result = '';
for (let i = 0; i < s.length; i++) {
    result += s.charAt(i).toUpperCase();
    // You can also use s[i] instead of s.charAt(i)
}
console.log(result);  // Prints: 'MARK'

s = "Mark";
result = '';
for (let i = 0; i < s.length; i++) {
    result += s.charAt(i).toLowerCase();
}
console.log(result);  // Prints: 'mark'
*/


// practice

let s = "mark";
let result = '';
for (let i = 0; i < s.length; i++) {
    result += s.charAt(i).toUpperCase();
}
console.log(result);

s = "Mark";
result = '';
for (let i = 0; i < s.length; i++) {
    result +=s.charAt(i).toLowerCase();
}
console.log(result);

