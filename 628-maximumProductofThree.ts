// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 628 - Maximum Product of Three Numbers ------------------- //

/* Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:

Input: nums = [1,2,3]
Output: 6
Example 2:

Input: nums = [1,2,3,4]
Output: 24
Example 3:

Input: nums = [-1,-2,-3]
Output: -6 */

// ------------------------ SOLUTION -------------------------- //

// Sorting the array and comparing the product of the first two elements and the last element with the product of the last three elements.
// Time complexity: O(n log n)
// Space complexity: O(n)

const maximumProduct = (nums: number[]): number => {
  const s = nums.sort((a, b) => a - b);
  return Math.max(
      s[0] * s[1] * s[s.length - 1],
      s[s.length - 1] * s[s.length - 2] * s[s.length - 3]
  );
};




// --------------------------- LOGS --------------------------- //

console.log(maximumProduct([1,2,3])) // 6
console.log(maximumProduct([1,2,3,4])) // 24
console.log(maximumProduct([-1,-2,-3])) // -6
console.log(maximumProduct([-1,-2,-3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) // 504

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 628-maximumProductofThree.ts