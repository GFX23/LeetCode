// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----- 1662 - CHECK IF TWO STRING ARRAYS ARE EQUIVALENT ----- //

/* Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

 

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true */

// ------------------------ SOLUTION -------------------------- //

// Reduce both arrays to a single string and compare them
// Time complexity: O(n)
// Space complexity: O(n)

const arrayStringsAreEqual = (word1: string[], word2: string[]): boolean => {
  let first = word1.reduce((sum, acc) => acc = sum + acc,"")
  let second = word2.reduce((sum, acc) => acc = sum + acc,"")

  return first === second
};



// --------------------------- LOGS --------------------------- //

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])) 
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1662-CheckIfTwoStringArraysAreEqual.ts