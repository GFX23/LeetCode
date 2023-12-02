// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ---- 1160 - FIND WORDS THAT CAN BE FORMED BY CHARACTERS ---- //

/* You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10. */

// ------------------------ SOLUTION -------------------------- //

// Create a map of chars from chars string
// Iterate through words array
// Create a map of chars from current word
// Compare both maps
// If all chars from word are in chars map, add word length to result
// Return result

// Time complexity: O(n^2)
// Space complexity: O(n)

const countCharacters = (words: string[], chars: string): number => {
  let sortedMap = new Map()
  for (let char of chars) {
      if (sortedMap.has(char)) {
      sortedMap.set(char, sortedMap.get(char) + 1)
      } else {
          sortedMap.set(char, 1)
      }
  }

  let result = 0
  for (let i = 0; i < words.length; i++) {
      let wordMap = new Map()
      let isMatch = true
      for (let char of words[i] ) {
          if (wordMap.has(char)) {
          wordMap.set(char, wordMap.get(char) + 1)
          } else {
              wordMap.set(char, 1)
          }
      }
      for (let [key, value] of wordMap) {
          if (sortedMap.get(key) < value || sortedMap.get(key) === undefined) {

              isMatch = false
          }
      }
      
      if (isMatch) result += words[i].length
  }

  return result
};



// --------------------------- LOGS --------------------------- //

console.log(countCharacters(["cat","bt","hat","tree"], "atach"))
console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"))
console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1160-findWordsThatCanBeFormed.ts