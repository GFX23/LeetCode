// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------ 201 - BitWise AND of Numbers Range ------------ //

/* Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: left = 5, right = 7
Output: 4
Example 2:

Input: left = 0, right = 0
Output: 0
Example 3:

Input: left = 1, right = 2147483647
Output: 0
 */

// ------------------------ SOLUTION -------------------------- //

// Itetate through the range and shift the bits to the right until the left and right are equal
// Time complexity: O(1)
// Space complexity: O(1)

const rangeBitwiseAnd = (left: number, right: number): number => {
  var shift = 0;
  for(; left != right; left >>=1, right >>=1, shift++ ){}
  return left << shift;
};

// --------------------------- LOGS --------------------------- //

console.log(rangeBitwiseAnd(5, 7)) // 4
console.log(rangeBitwiseAnd(0, 0)) // 0
console.log(rangeBitwiseAnd(1, 2147483647)) // 0

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 201-bitWiseANDofNumbersRange.ts