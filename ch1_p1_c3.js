// Your final challenge in this lesson, Space Explorer, is to manipulate a string - the essential skill of any Galactic Pioneer. You're given a mission name (a JavaScript string), and your task is to change its first and last characters keeping all the other letters intact. Show the original first and last characters, make the changes, and then display the updated string (make sure the program prints "Pork" as the updated string). Remember, JavaScript strings are immutable, so you need to create a new string with the modified first and last letters!

// Hints:

// You can use either the slice or substring method to extract parts of the string.
// When using the slice method, you can use negative indexing. Negative indexing starts from the end of the string, with -1 being the last character, -2 being the second last, and so on. For example, str.slice(1, -1) extracts the string from the second character to the second last character.
// Suggestions

// // Given mission name
// const missionName = "Sort";

// // TODO: Print the original first and last character of the mission name
// console.log(missionName[0]);
// console.log(missionName[missionName.length-1]);

// // TODO: Create a new string with the first letter as 'P' and last letter as 'k', the other letters should remain unchanged.
// const string="Pork";
// const newMissionName = missionName.replace("Sort","Pork");


// // TODO: Print the updated mission name

// console.log(newMissionName);
// // Make sure it prints "Pork"

// Given mission name
const missionName = "Sort";

// TODO: Print the original first and last character of the mission name
console.log(missionName[0]);
console.log(missionName[missionName.length-1]);

// TODO: Create a new string with the first letter as 'P' and last letter as 'k', the other letters should remain unchanged.
const substr = missionName.substring(1,3);
const newMissionName = `P${substr}k`;


// TODO: Print the updated mission name

console.log(newMissionName);
// Make sure it prints "Pork"