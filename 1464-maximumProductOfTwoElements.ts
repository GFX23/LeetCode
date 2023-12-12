// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----- 1464 - MAXIMUM PRODUCT OF TWO ELEMENTS IN ARRAY ------ //

/* Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
Example 3:

Input: nums = [3,7]
Output: 12 */

// ------------------------ SOLUTION -------------------------- //

// Sort the array, then return the product of the last two elements minus 1
// Time complexity: O(n log n)
// Space complexity: O(1)

const maxProduct = (nums: number[]): number => {
  let numbers = nums.sort((a,b) => a-b)
  let len = numbers.length
  return (numbers[len-1]-1) * (numbers[len-2]-1)
};

// --------------------------- LOGS --------------------------- //

console.log(maxProduct([3,4,5,2]))
console.log(maxProduct([1,5,4,5]))
console.log(maxProduct([3,7]))

// ------------------------ SOLUTION 2 ------------------------ //

// Find the two largest numbers in the array, then return their product minus 1.
// Using two-pointer approach.
// Time complexity: O(n)
// Space complexity: O(1)

const maxProduct2 = (nums: number[]): number => {
  let max1 = 0, max2 = 0;

  for (let num of nums) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }

  return (max1 - 1) * (max2 - 1);
};

// --------------------------- LOGS 2 ------------------------- //

console.log(maxProduct2([3,4,5,2])) // Output: 12
console.log(maxProduct2([1,5,4,5])) // Output: 16
console.log(maxProduct2([3,7])) // Output: 12

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1464-maximumProductOfTwoElements.ts