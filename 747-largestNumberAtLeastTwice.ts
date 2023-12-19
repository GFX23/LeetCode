// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------- 747 - LARGEST NUMBER AT LEAST TWICE OF OTHERS ------ //

/* You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

 

Example 1:

Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.
Example 2:

Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1. */

// ------------------------ SOLUTION -------------------------- //

// Find max number, iterate through array, check if all other nums are lower than max.

// Time complexity: O(n)
// Space complexity: O(1)

const dominantIndex = (nums: number[]): number => {
  let max = Math.max(...nums)
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] *2 > max && nums[i] !== max) {
          return -1
      }
  }
  return nums.indexOf(max)
};



// --------------------------- LOGS --------------------------- //

console.log(dominantIndex([3,6,1,0]))
console.log(dominantIndex([3,6,1,0,10,50]))
console.log(dominantIndex([3,6,1,0,5]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 747-largestNumberAtLeastTwice.ts