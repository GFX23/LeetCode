// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 392 - IS SUBSEQUENCE ------------------- //

/* Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some
(can be none) of the characters without disturbing the relative positions of the remaining characters.
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false */

// ------------------------ SOLUTION -------------------------- //

// We can use very easily iterating through array, since it should remain unchanged, 
// we can compare every char in s with char in t, on match we increase counter, after iteration,
// if counter is equal s.length we found every char in correct order.
// Time complexity: better than O(n)
// Space complexity: 0(1)

const isSubsequence = (s: string, t:string): boolean => {
  let counter = 0
  for (const char of t ) {
    if (s[counter] == char) {
      counter++
    }
  }
  return counter == s.length
}

// --------------------------- LOGS --------------------------- //

console.log(isSubsequence("abc", "ahbgdc")) // true
console.log(isSubsequence("axc", "ahbgdc")) // false
console.log(isSubsequence("acb", "ahbgdc")) // false

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 392-isSubsequence.ts