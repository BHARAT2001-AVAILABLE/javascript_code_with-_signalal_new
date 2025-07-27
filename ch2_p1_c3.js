// Cosmo
// Just now
// Read message aloud
// Now, let's put your JavaScript loop skills to the test. In the code below, fill in the missing piece to loop through the fruits array and print out a statement for each one, indicating its addition to the fruit salad.




let fruits = ["apple", "banana", "cherry", "date"];

let fruitsInSalad = "";
let fruitbeforesalad = "";

// TODO: Create a for loop that assembles a string of fruit names separated by spaces, without adding a space after the last fruit
// Hint: Loop until the second to last element, then add the last fruit separately

for (let i = 0; i < fruits.length - 1; i++) {
    
    fruitbeforesalad += fruits[i] + " ";
    fruitsInSalad = fruitbeforesalad +fruits[3]
}

console.log(fruitsInSalad);  // Output the fruits in the salad