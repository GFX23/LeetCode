// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------- 844 - BACKSPACE STRING COMPARE --------------- //

/* Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
  */

// ------------------------ SOLUTION -------------------------- //

// Create function that takes string as an argument
// Split string into array
// Create empty array
// Loop through array
// If current element is "#", pop last element from array
// Else push current element to array
// Join array into string
// Return string

// Time complexity: O(n)
// Space complexity: O(n)

const backspaceCompare = (s: string, t: string): boolean => {
  const checkStr = (string) => {
  let sString = string.split("")
  let str: string[] | string = []
  for (let i = 0; i < sString.length; i++) {
      if (sString[i] === "#") {
          str.pop()
      } else {
      str.push(sString[i])
      }
  }

  return str.join("")
  }

  const sStr = checkStr(s)
  const tStr = checkStr(t)

  return sStr === tStr
};



// --------------------------- LOGS --------------------------- //

console.log(backspaceCompare("ab#c", "ad#c"))
console.log(backspaceCompare("ab##", "c#d#"))
console.log(backspaceCompare("a#c", "b"))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 844-backspaceStringCompare.ts