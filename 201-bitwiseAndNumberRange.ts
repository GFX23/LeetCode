// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// -------------- 201 - Bitwise and Number range -------------- //

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

// 
// Time complexity: 
// Space complexity: 

const rangeBitwiseAnd = (left: number, right: number): number => {
    var shift = 0;
    for(; left != right; left >>=1, right >>=1, shift++ ){}
    return left << shift;
};


// --------------------------- LOGS --------------------------- //

console.log()
console.log()
console.log()

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 201-bitwiseAndNumberRange.ts
