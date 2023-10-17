// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 507 - Perfect Number ------------------- //

/* A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false.

 

Example 1:

Input: num = 28
Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28.
Example 2:

Input: num = 7
Output: false */

// ------------------------ SOLUTION -------------------------- //

//
// Time complexity: O(n)
// Space complexity: O(1)

const checkPerfectNumber = (num: number): boolean => {
  if (num === 1) return false;
  let sum = 0;

  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }

  return sum === num;
};

// --------------------------- LOGS --------------------------- //

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
console.log(checkPerfectNumber(1));

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 507-perfectNumber.ts
