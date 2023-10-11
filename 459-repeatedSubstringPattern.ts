// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------ 459 - Repeated Substring Pattern -------------- //

/* Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

Example 2:

Input: s = "aba"
Output: false

Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice. */

// ------------------------ SOLUTION -------------------------- //

// We take string + string, slice it from index 1. This slice should include s string
// Time complexity: (O)n
// Space complexity: (O)1

const repeatedSubstringPattern = (s: string): boolean => {
  return ( s + s ).slice( 1, -1 ).includes( s )
  }



// --------------------------- LOGS --------------------------- //

console.log(repeatedSubstringPattern("abab"))
console.log(repeatedSubstringPattern("aba"))
console.log(repeatedSubstringPattern("abcabcabcabc"))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 459-repeatedSubstringPattern.ts