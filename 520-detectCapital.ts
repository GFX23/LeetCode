
// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 520 - DETECT CAPITAL ------------------- //

/* We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

 

Example 1:

Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false */

// ------------------------ SOLUTION -------------------------- //

// iterate over the string, check if each letter is uppercase, if yes, setting zero into map, if no, setting 1 into map
// then iterating thru the map, if all 1s or all 0s, return true, if first letter is 1 and all others are 0s, return true, else return false
// Time complexity: O(n)
// Space complexity: O(n)

const detectCapitalUse = (word: string): boolean => {
const stringMap: number[] = []

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      stringMap.push(1)
    } else {
      stringMap.push(0)
    }
  }

  if (stringMap.every((el) => el === 1)) return true
  if (stringMap.every((el) => el === 0)) return true
  if (stringMap[0] === 1 && stringMap.slice(1).every((el) => el === 0)) return true

  return false
}


// --------------------------- LOGS --------------------------- //

console.log(detectCapitalUse('USA'))
console.log(detectCapitalUse('FlaG'))
console.log(detectCapitalUse('leetcode'))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 520-detectCapital.ts