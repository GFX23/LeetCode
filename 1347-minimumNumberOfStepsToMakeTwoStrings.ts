// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
//- 1347 . Minimum Number of Steps to Make Two Strings Anagram -//

/* You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

 

Example 1:

Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
Example 2:

Input: s = "leetcode", t = "practice"
Output: 5
Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
Example 3:

Input: s = "anagram", t = "mangaar"
Output: 0
Explanation: "anagram" and "mangaar" are anagrams.  */

// ------------------------ SOLUTION -------------------------- //

//  Iterate over s and t and create a map of each character and its count
//  Iterate over sMap and compare the value of each key to the value of the same key in tMap
//  If the value of the key in sMap is greater than the value of the key in tMap, add the difference to num
//  Return num

// Time complexity: O(n)
// Space complexity: O(n)

const minSteps = (s: string, t: string): number => {
  let num = 0
  let sMap = new Map()
  let tMap = new Map()

  for (let i = 0; i < s.length; i++) {
      sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
      tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
  }

  for (let [key, value] of sMap) {
      const valueOfT = tMap.get(key) || 0
      if (value > valueOfT) {
      num += value - valueOfT
      }
  }

  return num
};


// --------------------------- LOGS --------------------------- //

console.log(minSteps('bab', 'aba'))
console.log(minSteps('leetcode', 'practice'))
console.log(minSteps('anagram', 'mangaar'))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1347-minimumNumberOfStepsToMakeTwoStrings.ts