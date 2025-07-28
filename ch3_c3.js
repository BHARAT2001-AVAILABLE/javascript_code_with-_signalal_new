// The 'continue' Statement
// The continue statement bypasses the rest of the loop code for the current iteration only:
/*
for (let i = 0; i < 6; i++) {
    if (i === 3) {
        continue; // This skips the print command for '3'.
    }
    console.log(i); // This prints the numbers from 0 to 5, except 3.
}
    */
// Output:
// 0
// 1
// 2
// 4
// 5


// practice

for (let i = 0 ; i < 6 ; i++ ) {
  if (i===3) {
    continue;
  }
  console.log(i);
}

