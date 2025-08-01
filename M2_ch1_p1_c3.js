// You are given an array of n integers, where n ranges from 2 to 200, inclusive. The elements in the array range from -200 to 200, inclusive. Your task is to return an array where each element is the sum of a pair composed of an element and its 'opposite' element.

// By 'opposite', we mean that in an array of n elements, the first and last elements are paired, the second and second-to-last elements are paired, and so on. If the array is of odd length, the middle element pairs with itself.

// The method should handle both positive and negative integers and be capable of dealing with an odd number of elements in the list.

// For example, given an input array [1, 2, 3, 4, 5], your method should return [6, 6, 6]. This is because the first element 1 plus the last element 5 equals 6, the second element 2 plus the second-to-last element 4 equals 6, and the middle element 3 plus itself equals 6.

function solution(numbers) {
  // TODO: Implement solution here
  let result = [];
  let n = Math.floor(numbers.length)/2;
  for (let i = 0; i < n ; i++) {
    result.push(numbers[i]+numbers[numbers.length - i -1]);
  }
  return result;
}

console.log(solution([1,2,3,4,5]));
module.exports = { solution };