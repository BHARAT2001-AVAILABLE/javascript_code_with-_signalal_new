// Welcome to this course!

// Before we delve deeper into JavaScript essentials for interview prep, let's start with some foundational JavaScript features — specifically, arrays and strings. These features allow JavaScript to group multiple elements, such as numbers or characters, under a single entity.

// Revising Arrays and Strings
// As our starting point, it's crucial to understand how arrays and strings function in JavaScript. An array is a built-in object that provides a way to store multiple values in a single variable and is mutable (we can change it after creation), while strings are immutable (unalterable post-creation). Let's see examples:


// const myList = [1, 2, 3, 4];
// let myString = "hello";

// // Now let's try to change the first element of both these features
// // Using index to change the element at the specified index (0 in this case)
// myList[0] = 100;
// myString[0] = "t"; // does not change anything
// // The following method does not change the string in place,
// // but returns a new string where 'h' is replaced with 'H'
// myString.replace('h', 'H');
// // So it is possible to obtain a new string like this:
// const newString = myString.replace('h', 'H');

// console.log(myList); // prints [100, 2, 3, 4]
// console.log(myString); // prints hello
// console.log(newString); // prints Hello



// practice
const myList = [1,2,4,5];
let myString = "hello";

myList[0]=97;
myString[0]='t';

const newString = myString.replace('h','H');
console.log(myList);
console.log(myString);
console.log(newString);


