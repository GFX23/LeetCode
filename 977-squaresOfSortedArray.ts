// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------ 977 - Squares of a Sorted Array --------------- //

/* Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121] */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 

function sortedSquares(nums: number[]): number[] {
  const squared = nums.map(number => number ** 2)
  return squared.sort((a,b) => a - b)  
};


// --------------------------- LOGS --------------------------- //

console.log(sortedSquares([-4,-1,0,3,10])) // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])) // [4,9,9,49,121]
console.log(sortedSquares([1,2,3,4,5])) // [1,4,9,16,25]

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 977-squaresOfSortedArray.ts