// Understanding Strings
// Think of strings as a sequence of letters or characters. So, whether you're writing down a message or noting a paragraph, it all boils down to a string in JavaScript. Strings are enclosed by double quotes or single quotes.

// JavaScript

// const greetingString = "Hello, world!";

// // Accessing characters using indexing
// const firstChar = greetingString[0]; // 'H'
// const lastChar = greetingString[greetingString.length - 1]; // '!'

// // Making the entire string lowercase
// const lowercaseGreeting = greetingString.toLowerCase(); // "hello, world!"

// console.log(firstChar); // prints 'H'
// console.log(lastChar); // prints '!'
// console.log(lowercaseGreeting); // prints "hello, world!"
// Though strings are immutable, we can use string methods such as .toLowerCase(), .toUpperCase(), and .trim() to effectively work with them. These methods essentially create a new string for us.

// practice

const greetString = "HelloWorld";
const greetStrings = "  Hello World  ";
const firstChar = greetString[0];
const lastChar = greetString[greetString.length-1]; 
const lowerCaseGreet = greetString.toLowerCase();
const trimGreet = greetStrings.trim();
console.log(firstChar);
console.log(lastChar);
console.log(lowerCaseGreet);
console.log(trimGreet);
