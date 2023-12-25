// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --------------------- 91 - DECODE WAYS --------------------- //

/* A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.

 

Example 1:

Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
Example 3:

Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the string, and check if the current digit is 0 or not.
// If it is 0, then the previous digit should be 1 or 2, otherwise return 0.
// If it is not 0, then check if the previous digit is 1 or 2.
// If it is 1, then the current digit can be any number from 1 to 9.
// If it is 2, then the current digit can be any number from 1 to 6.
// If it is not 1 or 2, then the current digit can be any number from 1 to 9.
// So, we can see that the number of ways to decode the string depends on the number of ways to decode the previous string.
// So, we can use dynamic programming to solve this problem.
// We can use an array dp to store the number of ways to decode the string up to the current index.
// The length of the array is the length of the string plus 1.
// The first element of the array is 1, because there is only one way to decode an empty string.
// The second element of the array is 1, because there is only one way to decode a string with one digit.
// For the rest of the elements, we can use the formula:
// dp[i] = dp[i - 1] + dp[i - 2] if the current digit is not 0 and the previous digit is 1 or 2 and the current digit is less than or equal to 6.
// dp[i] = dp[i - 1] if the current digit is not 0.
// dp[i] = dp[i - 2] if the previous digit is 1 or 2 and the current digit is less than or equal to 6.
// Otherwise, dp[i] = 0.
// Finally, we return the last element of the array.

// Time complexity: O(n)
// Space complexity: O(n)

const numDecodings = (s: string): number => {
  let dp = Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === '0' ? 0 : 1;
  let n = s.length + 1;
  for (let i = 2; i < n; i++) {
      const twoDigit = Number(s.substring(i - 2, i));
      if (Number(s.substring(i - 1, i)) > 0)
          dp[i] += dp[i - 1];
      if (twoDigit > 9 && twoDigit < 27)
          dp[i] += dp[i - 2];
  }
  return dp.pop();
};



// --------------------------- LOGS --------------------------- //

console.log(numDecodings("12"))
console.log(numDecodings("226"))
console.log(numDecodings("06"))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 91-decodeWays.ts