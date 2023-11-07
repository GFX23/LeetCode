// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----- 744 - FIND SMALLEST LETTER GREATER THAN TARGET ------- //

/* You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
Example 3:

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0]. */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the array and compare each char to the target
// If the char is greater than the target, compare it to the result
// Return the result
// If no char is greater than the target, return the first char in the array
// Time complexity: O(n)
// Space complexity: O(1)

const nextGreatestLetter = (letters: string[], target: string): string => {
  let result = Infinity

  for (let i = 0; i < letters.length; i++) {
      let char = letters[i].charCodeAt(0)
      if (char > target.charCodeAt(0)) {
          result = Math.min(result, char)
      }
  }
  return result === Infinity ? letters[0] : String.fromCharCode(result)
};

// --------- CAN BE SOLVED BY BINARY SEARCH AS WELL ----------- //

const nextGreatestLetterBinary = (letters: string[], target: string): string => {
  let left = 0
  let right = letters.length - 1

  while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (letters[mid] <= target) {
          left = mid + 1
      } else {
          right = mid - 1
      }
  }
  return letters[left % letters.length]
}

// --------------------------- LOGS --------------------------- //

console.log(nextGreatestLetter(["c","f","j"], "a")) // --> "c"
console.log(nextGreatestLetter(["c","f","j"], "c")) // --> "f"
console.log(nextGreatestLetter(["x","x","y","y"], "z")) // --> "x"

console.log(nextGreatestLetterBinary(["c","f","j"], "a")) // --> "c"
console.log(nextGreatestLetterBinary(["c","f","j"], "c")) // --> "f"
console.log(nextGreatestLetterBinary(["x","x","y","y"], "z")) // --> "x"

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 744-findSmallestLetter.ts