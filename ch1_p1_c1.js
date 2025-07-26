// In this practice task, you will refine your packing list for a trip. Instead of adding 'sunglasses' at the end of the list, you need to insert them precisely at index 2. Recall how the splice method works for Arrays from the lesson, and apply that knowledge here.

// A packing list for a journey using JavaScript arrays
let travelItems = ["passport", "camera", "sunscreen", "hat"];

// Currently, sunglasses are being appended to the list.
// Your task is to add them at index 2 instead.
travelItems.splice(3,2,"sunglasses");
console.log("Updated travel items:", travelItems);