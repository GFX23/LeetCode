// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ---------------- 680 - VALID PALINDROME II ----------------- //

/* Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 */

// ------------------------ SOLUTION -------------------------- //

// Using two pointers, check if the string is a palindrome. If it is, return true.
// Time complexity: O(n)
// Space complexity: O(1)

const validPalindrome = (s: string): boolean => {
  if (isPalindrome(s, 0, s.length-1)) return true;
  
  let firstIdx: number = 0; // pointer 1
  let lastIdx: number = s.length-1; // pointer 2
  while (firstIdx <= lastIdx){
      if (s[firstIdx] === s[lastIdx]){
          firstIdx += 1;
          lastIdx -= 1;
          continue;
      }
      return isPalindrome(s, firstIdx+1, lastIdx) || isPalindrome(s, firstIdx, lastIdx-1);
  }
  return false;
};

const isPalindrome = (s: string, firstIdx: number, lastIdx: number): boolean =>{
  while (firstIdx <= lastIdx){
      if (s[lastIdx] !== s[firstIdx]) return false;
      lastIdx -= 1;
      firstIdx += 1;
  }
  return true;
}



// --------------------------- LOGS --------------------------- //

console.log(validPalindrome("aba"))
console.log(validPalindrome("abca"))
console.log(validPalindrome("abc")  )

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 680-validPalindromeII.ts