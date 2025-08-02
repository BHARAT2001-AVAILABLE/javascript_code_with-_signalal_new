function solution(numbers) {
    // TODO: implement solution here
    let result = [];
    let n = numbers.length;
    
    for (let num of numbers) {
        let reversed = parseInt(num.toString().split('').reverse().join(''), 10);
         result.push([num],[reversed])
    }
    
       
    
    return result;
}
numbers = [12,21,34,43,56,65];
console.log(solution(numbers))
module.exports = { solution };