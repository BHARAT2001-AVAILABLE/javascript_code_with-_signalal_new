// Lesson Overview
// Welcome! In this lesson, we'll delve into the basic string manipulation features of JavaScript, which include string tokenization, string concatenation, trimming of whitespace from strings, and type conversion operations.

// Tokenizing a String in JavaScript
// In JavaScript, we can use the split method from the String class to tokenize a string, essentially splitting it into smaller parts or 'tokens'.
/*
let sentence = "JavaScript is an amazing language!";
let tokens = sentence.split(" ");

tokens.forEach(token => console.log(token));
*/
// Output:
// JavaScript
// is
// an
// amazing
// language!

// We start by declaring a string variable sentence containing the text "JavaScript is an amazing language!". On the second line, we use the split method with a space character " " as the delimiter. This method splits the sentence every time it encounters a space and returns an array of substrings or tokens. In this case, the resulting tokens array will contain ["JavaScript", "is", "an", "amazing", "language!"]. We then use the forEach method to iterate over each element (token) in the tokens array. The arrow function token => console.log(token) is executed for each token, printing each word to the console, one per line.

// let sentence = "Jvascript is a mastery medium to get into web devlopment Env";
// let segments = sentence.split(" ");
// segments.forEach(segment => console.log(segment));

// write Again:

let sentence = "javascript is amazing course";
let tokens = sentence.split(" ");
tokens.forEach(token => console.log(token));