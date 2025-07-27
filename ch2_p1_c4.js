// Wrap up our exploration of JavaScript loops by writing a program to count the number of non-vowel characters in a given string. Remember, vowels are 'a', 'e', 'i', 'o', 'u', and all other letters are non-vowels. Use loops effectively to iterate through the string and determine the count of non-vowel characters!



// Define a string named 'word' to represent the phrase we'll work with
let word = "FRUIT Salad";

// TODO: Initialize a counter to hold the number of non-vowel characters
let nonVowel = 0;
// TODO: Use a for loop to iterate over each character in the string
for (let ch of word ){

// TODO: Inside the loop, write a condition to check if the character is not a vowel or a space
// Don't forget to consider both lowercase and uppercase characters
{
    if (!(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" || ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U" || ch == " ")) 
    nonVowel ++;
}
// TODO: If the condition is true, increase the counter for non-vowel characters

// TODO: Finally, print out the count of non-vowel characters
}
console.log(nonVowel);