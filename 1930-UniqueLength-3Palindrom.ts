// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------ 1930 - UNIQUE LENGTH 3 PALINDROME ------------- //

/* Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

A palindrome is a string that reads the same forwards and backwards.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
 
Example 1:

Input: s = "aabca"
Output: 3
Explanation: The 3 palindromic subsequences of length 3 are:
- "aba" (subsequence of "aabca")
- "aaa" (subsequence of "aabca")
- "aca" (subsequence of "aabca")
Example 2:

Input: s = "adc"
Output: 0
Explanation: There are no palindromic subsequences of length 3 in "adc".
Example 3:

Input: s = "bbcbaba"
Output: 4
Explanation: The 4 palindromic subsequences of length 3 are:
- "bbb" (subsequence of "bbcbaba")
- "bcb" (subsequence of "bbcbaba")
- "bab" (subsequence of "bbcbaba")
- "aba" (subsequence of "bbcbaba") */

// ------------------------ SOLUTION -------------------------- //

// Setting map to get unique values, so we dont have to iterate through entire array.
// For every letter in map, we find the first and last index of that letter in string.
// If first and last index are not the same, and between is at least one letter, we have a palindrome.
// We add it to the map and return the size of the map.
// Time complexity: O(n)
// Space complexity: O(n)

const countPalindromicSubsequence = (s: string): number => {
  let letters = new Set(s)
  let ans = 0
  letters.forEach(letter => {
      let [k, l] = [s.indexOf(letter), s.lastIndexOf(letter)]
      if (k !== l) {
      let unique = new Set(s.substring(k+1,l))
      ans += unique.size
      }
  })
  
  return ans
};

// --------------------------- LOGS --------------------------- //

console.log(countPalindromicSubsequence("aabca"))
console.log(countPalindromicSubsequence("adc"))
console.log(countPalindromicSubsequence("bbcbaba"))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1930-UniqueLength-3Palindrom.ts