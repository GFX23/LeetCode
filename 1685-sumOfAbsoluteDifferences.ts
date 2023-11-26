// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----------- 1685 - SUM OF ABSOLUTE DIFFERENCES ------------- //

/* You are given an integer array nums sorted in non-decreasing order.

Build and return an integer array result with the same length as nums such that result[i] is equal to the summation of absolute differences between nums[i] and all the other elements in the array.

In other words, result[i] is equal to sum(|nums[i]-nums[j]|) where 0 <= j < nums.length and j != i (0-indexed).

 

Example 1:

Input: nums = [2,3,5]
Output: [4,3,5]
Explanation: Assuming the arrays are 0-indexed, then
result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4,
result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3,
result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5.
Example 2:

Input: nums = [1,4,6,8,10]
Output: [24,15,13,15,21] */

// ------------------------ SOLUTION -------------------------- //

// Setting left and right to 0 and sum of all nums
// Looping through nums
// Counting how many numbers are on the left and right side of current number
// Pushing the difference between left and right to ans
// Adding current number to left and subtracting it from right
// Time complexity: O(n)
// Space complexity: O(n)

const getSumAbsoluteDifferences = (nums: number[]): number[] => {
  let left = 0;
  let right = nums.reduce((x, y) => x + y, 0);
  const ans: number[] = [];
  
  for (let i = 0; i < nums.length; i++) {
      const n = nums[i];
      const countLeft = i;
      const countRight = nums.length - i;
      ans.push(countLeft * n - left - (countRight * n - right));
      left += n;
      right -= n;
  }

  return ans;
};



// --------------------------- LOGS --------------------------- //

console.log(getSumAbsoluteDifferences([2,3,5]))
console.log(getSumAbsoluteDifferences([1,4,6,8,10]))
console.log(getSumAbsoluteDifferences([1,2,3,4,5,6,7,8,9,10]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1685-sumOfAbsoluteDifferences.ts