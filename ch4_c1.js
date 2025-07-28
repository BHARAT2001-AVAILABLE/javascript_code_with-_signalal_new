// Lesson Overview
// Welcome to an engaging JavaScript session! In this unit, we will delve deeper into handling string data in JavaScript. Consider situations in which you have to analyze text data, like constructing a web scraper or developing a text-based algorithm to interpret user reviews of a website. All these cases require efficient handling of strings, which involves analyzing and manipulating them. In this lesson, we will focus on how to traverse strings and perform operations on each character using JavaScript.

// The objective of this lesson is to become proficient in using JavaScript loops with a specific emphasis on strings. We will explore the techniques of string indexing and practice character operations using JavaScript functions.

// Working with ASCII Codes in Characters
// Characters in JavaScript can be manipulated using their ASCII values. ASCII (American Standard Code for Information Interchange) is a character encoding standard used to represent text in computers and other devices that use text. Every character has a unique ASCII value.

// You can convert a character into its ASCII value using the charCodeAt() method:

/*
let c = 'A';
let asciiVal = c.charCodeAt(0); // Retrieves the ASCII value of the character at index 0 of the string c, which is 'A', and assigns it to the variable asciiVal.
console.log(`The ASCII value of ${c} is: ${asciiVal}`);
// Prints: The ASCII value of A is: 65
*/

// practice
// let c ='A';

// let asciiVal = c.charCodeAt(0);

// console.log(`The ASCII value of ${c} is: ${asciiVal}`)

// repractice
let c='B';
let asciiVal= c.charCodeAt(0);

console.log(`The ASCII value of ${c} is : ${asciiVal}`);