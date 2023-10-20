
// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 541 - Reverse String ------------------- //

/* Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. 
If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd" */

// ------------------------ SOLUTION -------------------------- //

//  Iterate through the string in steps of 2k, and reverse the first k characters of each step.
//  Concatenate the reversed substring with the rest of the string, and return the new string.
// Time complexity: O(n)
// Space complexity: O(n) 

const reverseStr = (s: string, k: number): string => {
  let newString = ""
  for (let i = 0; i < s.length; i = i+(k*2)) {
      newString += s.substring(i, i+k).split("").reverse().join("") + s.slice(i+k, i+(k*2))
      // console.log(newString)
  }

  return newString
};

// --------------------------- LOGS --------------------------- //

console.log(reverseStr("abcdefg", 2)) // "bacdfeg"
console.log(reverseStr("abcd", 2)) // "bacd"
console.log(reverseStr("abcdefg", 8)) // "gfedcba"

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 541-reverseString.ts