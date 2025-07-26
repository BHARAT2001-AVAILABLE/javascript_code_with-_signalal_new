// Arrays in JavaScript allow us to organize data so that each item holds a definite position or an index. The index allows us to access or modify each item individually. For accessing elements, JavaScript arrays use zero-based indexing. This means the first element in the array is accessed with index 0, the second element with index 1, and so on. To get the last element of the array, we subtract one from the array's length (fruits.length - 1 in the example below).

// Working with arrays in JavaScript is as simple as this


// const fruits = ["apple", "banana", "cherry"];

// // Add a new element at the end
// fruits.push("date"); // ['apple', 'banana', 'cherry', 'date']
// console.log(fruits); // prints ['apple', 'banana', 'cherry', 'date']

// // Inserting an element at a specific position
// fruits.splice(1, 0, "bilberry"); // ['apple', 'bilberry', 'banana', 'cherry', 'date']
// console.log(fruits); // prints ['apple', 'bilberry', 'banana', 'cherry', 'date']
// // Removing a particular element
// fruits.splice(fruits.indexOf("banana"), 1); // ['apple', 'bilberry', 'cherry', 'date']
// console.log(fruits); // prints ['apple', 'bilberry', 'cherry', 'date']
// // Accessing elements using indexing
// const firstFruit = fruits[0]; // apple
// const lastFruit = fruits[fruits.length - 1]; // date
// console.log(firstFruit); // prints apple
// console.log(lastFruit); // prints date

// The splice method takes three parameters:

// The start index where elements will be added or removed.
// The number of elements to remove from the start index.
// The elements to add at the start index.
// In the example fruits.splice(fruits.indexOf("banana"), 1);:

// fruits.indexOf("banana") returns the index of the element "banana", which is 2 in this case.
// The first parameter 2 specifies the start index for removal.
// The second parameter 1 indicates that we want to remove one element starting from index 2.
// As a result, the element "banana" at index 2 is removed from the array.


// practice

const fruits =["apple","banana","cherry"];
fruits.push("date");
console.log(fruits);
fruits.splice(2,0,"bluberry");
console.log(fruits); 
fruits.splice(fruits.indexOf("banana"),1);
console.log(fruits);

const firstFruit=fruits[0];
const lastFruit=fruits[fruits.length-1];
console.log(firstFruit);
console.log(lastFruit);