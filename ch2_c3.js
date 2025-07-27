// Enhanced For Loop in JavaScript
// The for loop is versatile and can work with any sequence-like structure in JavaScript, such as strings and arrays. In JavaScript, the enhanced for loop, known as the for...of loop, is used to traverse these collections more simply and safely since it eliminates the need to manually control the loop variable.
/*
let fruits = ["apple", "banana", "cherry"];

// `fruit` stands for each fruit in the `fruits` array
for (let fruit of fruits) {
    console.log(fruit);
}
*/
// Output:
// apple
// banana
// cherry

// In the above example, the fruit variable stands for each element in the fruits array. The loop body executes once for each item in the fruits array, with fruit being a reference to the current element in each iteration.

// Similarly, we may loop through strings (which can be considered containers of characters):
/*
let word = "hello";
// `ch` is each individual character in `word`
for (let ch of word) {
    console.log(ch);
}
*/
// Output:
// h
// e
// l
// l
// // o

// In the example above, ch stands for each character in the word string. The loop repeats for each character in the string word. For each repetition, it will print the specific character, hence printing hello one character at a time.
// practice
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
     console.log(fruit);
}

let items = ["cap", "book" , "pen"];
for (let item of items) {
    console.log(item);
}

let word = "glasiers";
for (let ch of word) {
    console.log(ch);
}


let bakeries = ["bun", "cake", "pasteries", "Biscuits"];
for(let item of bakeries) {
    console.log(item);
}