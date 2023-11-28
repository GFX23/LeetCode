// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----------- 1814 - COUNT NICE PAIRS IN AN ARRAY ------------ //

/* You are given an array nums that consists of non-negative integers. Let us define rev(x) as the reverse of the non-negative integer x. For example, rev(123) = 321, and rev(120) = 21. A pair of indices (i, j) is nice if it satisfies all of the following conditions:

0 <= i < j < nums.length
nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
Return the number of nice pairs of indices. Since that number can be too large, return it modulo 109 + 7.

 

Example 1:

Input: nums = [42,11,1,97]
Output: 2
Explanation: The two pairs are:
 - (0,3) : 42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121.
 - (1,2) : 11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12.
Example 2:

Input: nums = [13,10,35,24,76]
Output: 4 */

// ------------------------ SOLUTION -------------------------- //

// Create a map to store the difference between the number and its reverse.
// Iterate over the array and find the difference between the current number and its reverse.
// If the difference is present in the map, then add the value of the difference to the pairs variable.
// Time complexity: O(n)
// Space complexity: O(n)

const countNicePairs = (nums: number[]): number => {
  const reverse = (n) => {
  let r = 0;
  while (n > 0) {
      r = r * 10 + n % 10;
      n = Math.floor(n / 10);
  }
  return r;
};

const map = new Map();
let pairs = 0;

for (const v of nums) {
  const revDiff = v - reverse(v);
  const d = map.get(revDiff) || 0;
  pairs = (pairs + d) % 1000000007;
  map.set(revDiff, d + 1);
}

return pairs;
};



// --------------------------- LOGS --------------------------- //

console.log(countNicePairs([42,11,1,97]))
console.log(countNicePairs([13,10,35,24,76]))
console.log(countNicePairs([10,2,11]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1814-countNicePairsInArray.ts