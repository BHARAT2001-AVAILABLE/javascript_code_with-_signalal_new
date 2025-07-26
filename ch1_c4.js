
/*// Indexing and Common Operations
// Both arrays and strings allow us to access individual elements through indexing. In JavaScript, we start counting from 0, implying the first element is at index 0, the second at index 1, and so on. Negative indexing is not directly supported in JavaScript, but you can work around it by adjusting indices based on the length of the collection.

// We have many operations we can perform on our lists and strings. We can slice them, concatenate them, and even find an occurrence of a particular element!

const myList = [1, 2, 3, 4, 5];
const myString = "Hello";

// Slicing: `slice` for array and `substring` or `slice` for strings
// Note: The first index is inclusive and the second index is exclusive 
const sliceList = myList.slice(2, 4); // [3, 4]
const sliceString = myString.substring(1, 3); // "el"

// Concatenation: `concat` or spread operator for lists and `+` operator or template literals for strings
const concatenateList = myList.concat([6, 7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
const concatenateListSpread = [...myList, 6, 7, 8]; // [1, 2, 3, 4, 5, 6, 7, 8]
const concatenateString = `${myString}, world!`; // "Hello, world!"
const concatenateStringPlus = myString + ", world!"; // "Hello, world!"

// Finding the index of an element in a list or a string
// `indexOf` returns the first occurrence index of the element
// returns -1 if the list or the string doesn't contain the element
const indexList = myList.indexOf(3); // 2 - Index of element '3'
const indexString = myString.indexOf('e'); // 1 - Index of character 'e'

// Sorting items in array in non-increasing order
const sortedList = [...myList].sort((a, b) => b - a); // [5, 4, 3, 2, 1]


// When using the spread operator for concatenation (...myList), the elements of myList are expanded into individual elements and combined with additional elements [6, 7, 8].

// Template literals, enclosed by backticks (`), allow you to embed expressions inside a string using ${expression}. This provides a cleaner and more readable way to concatenate strings compared to using the + operator.

// The spread operator, used in [...myList], creates a shallow copy of myList, ensuring the original array remains unchanged. The sort method with a comparison function (a, b) => b - a sorts the array in non-increasing order. Here's how it works:

// The comparison function receives two arguments, a and b.
// If the returned value is negative, a should come before b.
// If the returned value is positive, b should come before a.
// If the returned value is zero, their positions are unchanged relative to each other.
// By subtracting a from b, it sorts the elements in descending order (from highest to lowest). Thus, sortedList will contain [5, 4, 3, 2, 1], a sorted copy of myList in descending order.


// View video lesson
// practice
*/
const myList1 = [1,2,3.4,5];
const myString1 = "hello";

const sliceList1 = myList1.slice(2,4);
console.log(sliceList1);

const sliceString1 = myString1.substring(1,4);
console.log(sliceString1);

const concatenateList1 = myList1.concat([8,9,0]);
console.log(concatenateList1);

const concatenateListSpread1 = [...myList1,8,9,0];
console.log(concatenateListSpread1);

const concatenateString1 = `${myString1}, world!`;
console.log(concatenateString1);

const concatenateStringPlus1 = myString1 + ", world!";
console.log(concatenateStringPlus1);


const indexList1 = myList1.indexOf(3.4);
console.log(indexList1);

const indexString1 = myString1.indexOf('o');
console.log(indexString1);

const sortCompare=[...myList1].sort((a,b)=> b - a);
console.log(sortCompare);