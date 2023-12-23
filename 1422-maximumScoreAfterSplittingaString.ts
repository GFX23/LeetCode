// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------- 1422 - MAXIMUM SCORE AFTER SLITTING A STRING ------- //

/* Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

 

Example 1:

Input: s = "011101"
Output: 5 
Explanation: 
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5 
left = "01" and right = "1101", score = 1 + 3 = 4 
left = "011" and right = "101", score = 1 + 2 = 3 
left = "0111" and right = "01", score = 1 + 1 = 2 
left = "01110" and right = "1", score = 2 + 1 = 3
Example 2:

Input: s = "00111"
Output: 5
Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
Example 3:

Input: s = "1111"
Output: 3 */

// ------------------------ SOLUTION -------------------------- //

// Initialize a variable to count the number of zeros, and a variable to count the number of ones, and a variable to store the answer
// Iterate through the string
// If the current character is a 1, decrement the ones variable
// Else, increment the zeros variable
// Set the answer variable to the maximum of the answer variable and the sum of the zeros and ones variables
// Return the answer variable

// Time complexity: O(n)
// Space complexity: O(1)

const maxScore = (s: string): number => {
  let zero = 0
  let ans = 0
  let ones = s.split("").filter(num => num === "1").length
  if (ones === 0) {
      return s.length-1
  }
  for(let i = 0; i < s.length-1; i++) {
      if (s[i] === "1") {
          ones -= 1
      } else {
          zero += 1 
      }
      ans = Math.max(ans, zero+ones)
  }
  return ans

};



// --------------------------- LOGS --------------------------- //

console.log(maxScore("011101"))
console.log(maxScore("00111"))
console.log(maxScore("1111"))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1422-maximumScoreAfterSplittingaString.ts