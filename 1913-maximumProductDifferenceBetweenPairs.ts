// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --- 1913 - MAXIMUM PRODUCT DIFFERENCE BETWEEN TWO PAIRS ---- //

/* The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

Return the maximum such product difference.

Example 1:

Input: nums = [5,6,2,7,4]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.
Example 2:

Input: nums = [4,2,5,9,7,4,8]
Output: 64
Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
The product difference is (9 * 8) - (2 * 4) = 64.
 */

// ------------------------ SOLUTION -------------------------- //

// Sort the array, then return the difference between the first two and the last two elements
// Time complexity: O(n log n)
// Space complexity: O(1)

const maxProductDifference = (nums: number[]): number => {
  const len = nums.length - 1
  nums.sort((a,b) => a -b)
  return Math.abs((nums[0]*nums[1]) - (nums[len]*nums[len-1]))
};

// --------------------------- LOGS --------------------------- //

console.log(maxProductDifference([5,6,2,7,4]))
console.log(maxProductDifference([4,2,5,9,7,4,8]))
console.log(maxProductDifference([1,2,3,4,5,6,7,8,9,10]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1913-maximumProductDifferenceBetweenPairs.ts