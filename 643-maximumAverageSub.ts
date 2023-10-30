// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// -------------- 643 - Maximum Average Subarray ------------------- //

/* You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000 */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 

const findMaxAverage = (nums: number[], k: number): number => {
  if (nums.length == 1) {
      return nums[0]
  }
  let result = -Infinity
  let tempArr = nums.slice(0,k).reduce((acc, sum) => acc + sum, 0)
for (let i = k; i <= nums.length; i++) {
   result = Math.max(result, tempArr)
   tempArr += nums[i] - nums[i - k];
}

return result/k
};



// --------------------------- LOGS --------------------------- //

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage([5], 1))
console.log(findMaxAverage([0,4,0,3,2], 1))
console.log(findMaxAverage([0,4,0,3,2], 2))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 643-maximumAverageSub.ts