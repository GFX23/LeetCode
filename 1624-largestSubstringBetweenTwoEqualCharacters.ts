// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// -- 1624 -  Largest substring between two equal characters -- //

/* Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.
Example 2:

Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".
Example 3:

Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s. */

// ------------------------ SOLUTION -------------------------- //

// Create a map to store the characters and their count
// Iterate through the string
// If the character is not in the map, add it with count 1
// If the character is in the map, increment the count
// If the count is 2, get the index of the first and last occurrence of the character
// Calculate the length of the substring between the two occurrences
// Update the longest substring length if necessary
// Return the longest substring length

// Time complexity: O(n)
// Space complexity: O(n)

const maxLengthBetweenEqualCharacters = (s: string): number => {
  let map = new Map<string, number>()
  let longest = -1

  for (let i = 0; i < s.length; i++) {
      map.set(s[i], (map.get(s[i]) || 0) +1 )
      if (map.get(s[i]) === 2) {
          let length = s.lastIndexOf(s[i]) - s.indexOf(s[i]) -1
          longest = Math.max(longest, length)
      }
  }
  return longest
};



// --------------------------- LOGS --------------------------- //

console.log(maxLengthBetweenEqualCharacters("aa"))
console.log(maxLengthBetweenEqualCharacters("abca"))
console.log(maxLengthBetweenEqualCharacters("cbzxy"))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1624-largestSubstringBetweenTwoEqualCharacters.ts