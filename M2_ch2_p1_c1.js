// You are given an integer n where n ranges from 
// 1
// 1 to 
// 10
// 8
// 10 
// 8
//  , inclusive. Your task is to write a function that calculates and returns the product of the odd digits of n, without converting n into a string.

// For example, if n equals 43172, the output should be 21, because the product of the odd digits 3, 1, and 7 is 21.

// Please note that if n has no odd digits, your function should return 0.

// You are expected to solve this task by using a while loop. Good luck!

function solution(n) {
    // TODO: implement
    let digit_product = 1;
    let foundOdd = false;
    while (n > 0) {

        let digit = n % 10;


        if (digit % 2 !== 0) {

            digit_product *= digit;
            foundOdd = true;

        }
        n = Math.floor(n / 10);
    }

    if (foundOdd) {
        return digit_product;
    } else {
        return 0;
    }

}
console.log(solution(43172));

module.exports = { solution };

// 21


//   Solution
//     ✔ test01
//     ✔ test02
//     ✔ test03
//     ✔ test04
//     ✔ test05
//     ✔ test06
//     ✔ test07
//     ✔ test08
//     ✔ test09
//     ✔ test10


//   10 passing (5ms)
