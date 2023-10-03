/*Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]*/

const reverseString = (s:string[]): void => {
  let length = s.length-1

  for (let i = 0; i < length; i++) {

    // creating buffer
    let prevChar = s[i]
    s[i] = s[length]
    s[length] = prevChar
    length--
  }
}

// ofc you can use .reverse()