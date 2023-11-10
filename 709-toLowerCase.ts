// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 709 - To Lower Case -------------------- //

/* Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

Example 1:

Input: s = "Hello"
Output: "hello"
Example 2:

Input: s = "here"
Output: "here"
Example 3:

Input: s = "LOVELY"
Output: "lovely" */

// ------------------------ SOLUTION -------------------------- //

// Iterate over the string and check if the char code is between 65 and 90 (uppercase letters)
// If so, convert the char code to lowercase by adding 32 to it
// Else push the char to the new string
// Return the new string
// Time complexity: O(n)
// Space complexity: O(n)

const toLowerCase = (s: string): string => {
  let newString: string[] = []
  for (let i = 0; i < s.length; i++) {
      if (s.charCodeAt(i) <= 90 && s.charCodeAt(i) >= 65) {
      let char = String.fromCharCode(s.charCodeAt(i) + 32)
      newString.push(char)
      } else {
          newString.push(s[i])
      }
  }

  return newString.join("")
};


// --------------------------- LOGS --------------------------- //

console.log(toLowerCase("Hello"))
console.log(toLowerCase("here"))
console.log(toLowerCase("LOVELY"))
console.log(toLowerCase("al&phaBET"))
console.log(toLowerCase("1234567890"))
console.log(toLowerCase(""))


// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 709-toLowerCase.ts