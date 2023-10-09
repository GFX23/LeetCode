// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------ 434 - NUMBER OF SEGMENTS IN STRING ------------ //

/* Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

 

Example 1:

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
Example 2:

Input: s = "Hello"
Output: 1 */

// ------------------------ SOLUTION -------------------------- //

// Setting result variable (O(1)) and iterating through string linearly (O(n)), checking for condition, 
// and setting result++
// Time complexity: O(n)
// Space complexity: O(1)

const countSegments = (s: string): number => {

  let result = 0
  for (let i = 0; i < s.length ; i++) {
    if ((i == 0 || s[i-1] == " ") && s[i] !== " ") {
      result++
    }
  }
  return result
}



// --------------------------- LOGS --------------------------- //

console.log(countSegments("Hello, my name is John"))
console.log(countSegments("Hello"))
console.log(countSegments(""))
console.log(countSegments("     "))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 434-segmentsInString.ts