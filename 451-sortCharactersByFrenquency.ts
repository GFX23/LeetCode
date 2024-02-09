// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 451 - ############## ------------------- //

/* Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

 

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters. */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the string and count the frequency of each character
// Sort the characters by frequency
// Create a new string with the characters sorted by frequency

// Time complexity: O(nlogn) - sorting the array
// Space complexity: O(n) - creating a new array to store the frequency of each character

const frequencySort = (s: string): string => {
  const map = new Map
  for (let i = 0; i < s.length; i++) {
      map.set(s[i], (map.get(s[i]) || 0) + 1)
  }
  let array = Array.from(map.entries())
  array.sort((a,b) =>  b[1] - a[1] )

  return array.map(item => item[0].repeat(item[1])).join("")
};


// --------------------------- LOGS --------------------------- //

console.log(frequencySort("tree"))
console.log(frequencySort("cccaaa"))
console.log(frequencySort("Aabb"))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 451-sortCharactersByFrenquency.ts