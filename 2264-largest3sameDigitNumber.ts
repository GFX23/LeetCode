// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----------- 2264 - LARGEST 3 SAME DIGIT IN STRING ---------- //

/* You are given a string num representing a large integer. An integer is good if it meets the following conditions:

It is a substring of num with length 3.
It consists of only one unique digit.
Return the maximum good integer as a string or an empty string "" if no such integer exists.

Note:

A substring is a contiguous sequence of characters within a string.
There may be leading zeroes in num or a good integer.

Example 1:

Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777".
Example 2:

Input: num = "2300019"
Output: "000"
Explanation: "000" is the only good integer.
Example 3:

Input: num = "42352338"
Output: ""
Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers. */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the string, check if the next digit is the same as the current one, if so, increment the check variable, if not, reset it to 1.
// If the check variable is 3, then the current digit is the largest 3 same digit number.
// If there is no such number, return an empty string.
// If there is such a number, return it as a string.

// Time complexity: O(n)
// Space complexity: O(1)

const largestGoodInteger = (num: string): string => {
  let str = ""
  let number = -Infinity
  let check = 1
  for (let i = 0; i< num.length -1 ; i++) {
      if (num[i+1] === num[i]) {
          ++check
      }  else {
          check = 1
      } 
      if (check === 3) {
          number = Math.max(number, parseInt(num[i]))
      } 
  }

  return number < 0 ? str : `${number}${number}${number}`
};

// --------------------------- LOGS --------------------------- //

console.log(largestGoodInteger("6777133339"))
console.log(largestGoodInteger("2300019"))
console.log(largestGoodInteger("42352338"))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 2264-largest3sameDigitNumber.ts