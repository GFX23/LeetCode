// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- ### - ############## ------------------- //

/* You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.


Example 1:

Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
Example 2:

Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".
Example 3:

Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number. */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the string from the end, checking if the number is odd. If it is, return it. If not, remove the last digit and check again. If the string is empty, return an empty string.

// Time complexity: O(n)
// Space complexity: O(1)

const largestOddNumber = (num: string): string => {
  let biggest = 0
  let string = num

  while (string.length > 0) {
      console.log(string)
      if (parseInt(string) % 2 === 1) {
          biggest = Math.max(biggest, parseInt(string))
          break
      }
      string = string.substring(0, string.length-1)
  }

  return biggest === 0 ? "" : String(biggest)
};



// --------------------------- LOGS --------------------------- //

console.log(largestOddNumber("52"))
console.log(largestOddNumber("4206"))
console.log(largestOddNumber("35427"))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1903-LargestOddNumberInString.ts