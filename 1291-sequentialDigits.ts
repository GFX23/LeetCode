// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- ### - ############## ------------------- //

/* An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

 

Example 1:

Input: low = 100, high = 300
Output: [123,234]
Example 2:

Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345] */

// ------------------------ SOLUTION -------------------------- //

// Iterate through all possible numbers and check if they are sequential
// If they are, add them to the result array
// Return the result array

// Time complexity: O(n2)
// Space complexity: O(n)

const sequentialDigits = (low: number, high: number): number[] => {
  let result: number[] = []
  let string = "123456789"
  for (let i = String(low).length; i <= String(high).length; i++ ) {
      for (let j = 0; j < 10 - i; j++) {
          let num = parseInt(string.substring(j, j+i))
          console.log(num)
          if (num >= low && num <= high) {
              result.push(num)
          }
      }
  }

  return result
};


// --------------------------- LOGS --------------------------- //

console.log(sequentialDigits(100, 300))
console.log(sequentialDigits(1000, 13000))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 