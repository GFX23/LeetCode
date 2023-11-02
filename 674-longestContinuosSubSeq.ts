// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------- 674 - LONGEST CONTINUOUS INC. SUBSEQUENCE ---------- //

/* Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

 

Example 1:

Input: nums = [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
4.
Example 2:

Input: nums = [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
increasing. */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the array and compare each element with the next one. 
// If the next one is bigger, increase the result counter. 
// If not, reset the counter to 1.
// Time complexity: O(n)
// Space complexity: O(1)

const findLengthOfLCIS = (nums: number[]): number => {
  let result = 1
  let maxResult = 1
  for (let i =0; i < nums.length; i++) {
      if (nums[i] < nums[i+1]) {
          result++
          maxResult = Math.max(maxResult, result)
      } else {
          result = 1
      }
  }
  
  return maxResult
  }

// --------------------------- LOGS --------------------------- //

console.log(findLengthOfLCIS([1,3,5,4,7]))
console.log(findLengthOfLCIS([2,2,2,2,2]))
console.log(findLengthOfLCIS([1,3,5,7]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 674-longestContinuosSubSeq.ts