// String Indexing Reminder
// JavaScript strings work with a zero-based indexing system. This means that you can access specific characters in a string by using their position.

// Please note: If you try to access an index that does not exist in your string, JavaScript will return undefined. Hence, it is always recommended to check the string length before accessing any index.

// Here's an example:

// let text = "Hello, JavaScript!";
// let index = 9; // The index we want to access

// if (index < text.length) {
//     let charAtIndex = text.charAt(index);
//     console.log(`The character at index ${index} is: ${charAtIndex}`);
// } else {
//     console.log(`The index ${index} is out of bounds for the string!`);
// }

// Prints: The character at index 9 is: v

// practice

let text = "hello, javascript!";
let index = 9;
if (index < text.length) {
    let charIndexAt = text.charAt(index);
    console.log(`The character at index ${index} is: ${charIndexAt}`);
}else {
  console.log('The index ${index} is out of bounds for string!');
}

