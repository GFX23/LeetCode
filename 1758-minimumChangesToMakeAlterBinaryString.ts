// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- ### - ############## ------------------- //

/* You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

Return the minimum number of operations needed to make s alternating.

 

Example 1:

Input: s = "0100"
Output: 1
Explanation: If you change the last character to '1', s will be "0101", which is alternating.
Example 2:

Input: s = "10"
Output: 0
Explanation: s is already alternating.
Example 3:

Input: s = "1111"
Output: 2
Explanation: You need two operations to reach "0101" or "1010". */

// ------------------------ SOLUTION -------------------------- //

// Iterate over the string and count the number of 1s and 0s that are in the wrong place.
// Return the minimum of the two.

// Time complexity: O(n)
// Space complexity: O(1)

const minOperations = (s: string): number => {
  let start1 = 0,
    start0 = 0;

  for (let i = 0; i < s.length; i++)
    if ((s[i] === '1') === (i % 2 === 0)) start1++;
    else start0++;

  return Math.min(start1, start0);
};



// --------------------------- LOGS --------------------------- //

console.log(minOperations('0100'))
console.log(minOperations('10'))
console.log(minOperations('1111'))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1758-minimumChangesToMakeAlterBinaryString.ts