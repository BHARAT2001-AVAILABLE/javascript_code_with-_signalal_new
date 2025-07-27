// For Loop in JavaScript
// The for loop is a control flow statement that allows code to be executed repeatedly.

// The structure of a for loop is typically for (initialization; condition; iteration) { loop body }, where the loop body gets executed for as long as the condition evaluates to true. After each loop, the iteration is executed, which generally updates the value of the loop control variable. Here is how it generally works:

// Initialization: This is where you set up the loop variable. It's executed once when the loop begins.
// Condition: This Boolean expression determines if the loop will continue or stop. If it's true, the loop continues; if it's false, the loop ends, and the flow jumps to the next statement after the loop block.
// Iteration: This is where you update the loop variable. This statement executes after the loop body and right before the next condition check.
// Loop Body: The block of code to be executed in each loop.
// Let's print a range of numbers using a for loop:

for (let num = 0; num < 5; num++) {
    console.log(num);
}

// Output:
// 0
// 1
// 2
// 3
// 4

/*
In each cycle of the loop, the variable num is updated after executing the code inside the block. 
This means that console.log(num) runs first, then num is incremented by 1 before the next iteration.
*/