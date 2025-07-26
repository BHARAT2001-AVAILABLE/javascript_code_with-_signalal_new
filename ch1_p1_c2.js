// Cosmo
// 4:44 PM
// Read message aloud
// To manage your items for a trip efficiently, you need to use array methods to replace a specific item in your packing list with another item.

// Follow these steps:

// Find the index of the item you want to replace.
// Replace that item with another item using the index found.
// Hint: Use Array methods for this task.

// Travel Packing List and Replacement
const packingList = ["clothes", "toothbrush", "passport", "camera"];

const itemToCheck = "passport";
const replacementItem = "sunglasses";

// TODO: Find the index of itemToCheck in the packingList
let index = packingList.indexOf(itemToCheck);

// TODO: Replace itemToCheck with replacementItem in the packingList using the index found
if (index !== -1) {
    packingList[index] = replacementItem;
}
   
// Print out the results
console.log("Updated Packing List: " + packingList);