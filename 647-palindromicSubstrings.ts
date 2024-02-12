// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --------------- 647 - Palindromic Substring ---------------- //

/* Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa". */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 

const countSubstrings = (s: string): number => {

  const widthSearch = (l, r): number => {
    let res = 0;
    while (l >= 0 && r < s.length) {
      if (s[l] !== s[r])
        break;

      res++; l--; r++;
    }
    return res;
  }

  let ans = widthSearch(0, 0);
  for (let i = 1; i < s.length; i++) {
    ans += widthSearch(i, i);
    ans += widthSearch(i - 1, i);
  }

  return ans;
};


// --------------------------- LOGS --------------------------- //

console.log(countSubstrings("abc")) //3
console.log(countSubstrings("aaa")) //6
console.log(countSubstrings("abccba")) //9

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 647-palindromicSubstrings.ts