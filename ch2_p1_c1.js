// Change the for...of loop in the starter code to a while loop to iterate over the fruits array for our fruit salad. Make sure to add all the fruits!

// Array of fruits to include in a fruit salad
const fruits = ["apple", "banana", "orange", "kiwi", "melon"];

// Using a for...of loop to iterate over the array of fruits
// TODO: change to a while loop
// for (const fruit of fruits) {
//     console.log("Adding " + fruit + " to the salad.");
// }


let i = 0;
while (i < fruits.length ) {
     
     console.log("Adding " + fruits[i] + " to the salad");
   
    i++;    
}