// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --------------- 728 - SELF DIVIDING NUMBERS ---------------- //

/* A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

 

Example 1:

Input: left = 1, right = 22
Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
Example 2:

Input: left = 47, right = 85
Output: [48,55,66,77] */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the range of numbers, check if each number is self-dividing
// by iterating through the digits of the number and checking if the number is divisible by each digit
// if so, push the number to the result array
// Time complexity: O(n^2)
// Space complexity: O(n)

const selfDividingNumbers = (left: number, right: number): number[] => {
  let result: number[] = []
  for (let i = left; i <= right; i++) {
      let isSelfDiv = 1
      for (let char of String(i)) {
          if (i % parseInt(char) !== 0 || parseInt(char) === 0) {
              isSelfDiv = 0
          }  
      }
      isSelfDiv && result.push(i)
  }
  return result
};

// --------------------------- LOGS --------------------------- //

console.log(selfDividingNumbers(1, 22))
console.log(selfDividingNumbers(47, 85))
console.log(selfDividingNumbers(1, 10000))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 728-selfDividingNumber.ts