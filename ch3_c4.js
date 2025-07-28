// Use-case with a For Loop
// By utilizing the tools we've covered so far, we can craft more flexible loops. Here's a snippet where we terminate the loop once we find "Charlie":
/*
const names = ["Alice", "Bob", "Charlie", "David", "Charlie"];

for (const name of names) {
    if (name === "Charlie") {
        console.log("Found Charlie!"); // This prints when 'Charlie' is found.
        break; // This stops the loop after finding 'Charlie'.
    }
}
    */
// Output:
// Found Charlie!

// Lesson Summary and Practice
// Congratulations! You are now familiar with JavaScript's if statement, as well as the break and continue statements and their applications in loops. We encourage you to reinforce your learning through the upcoming practice exercises. Happy coding!
/*
const names = ["Alice","Bob","Charlie","David","Charlie"];

for (const name of names) {
    if (name === "Charlie") {
        console.log("Found Charlie !")
        break;
    }
}
    */

const names =["shivani","aishwariya","Chandra","Gaurav"];

for (const name of names) {
    if (name === "aishwariya") {
        console.log("finally i found aishwariya");
        break;
    }
}
