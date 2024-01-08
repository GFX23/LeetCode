// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --------- 446. Arithmetic Slices II - Subsequence ---------- //

/* Given an integer array nums, return the number of all the arithmetic subsequences of nums.

A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, [1, 3, 5, 7, 9], [7, 7, 7, 7], and [3, -1, -5, -9] are arithmetic sequences.
For example, [1, 1, 2, 5, 7] is not an arithmetic sequence.
A subsequence of an array is a sequence that can be formed by removing some elements (possibly none) of the array.

For example, [2,5,10] is a subsequence of [1,2,1,2,4,1,5,10].
The test cases are generated so that the answer fits in 32-bit integer.

 

Example 1:

Input: nums = [2,4,6,8,10]
Output: 7
Explanation: All arithmetic subsequence slices are:
[2,4,6]
[4,6,8]
[6,8,10]
[2,4,6,8]
[4,6,8,10]
[2,4,6,8,10]
[2,6,10]
Example 2:

Input: nums = [7,7,7,7,7]
Output: 16
Explanation: Any subsequence of this array is arithmetic. */

// ------------------------ SOLUTION -------------------------- //

/* 
This function calculates the total number of arithmetic subsequences in an array of numbers. An arithmetic subsequence is a sequence of numbers in which the difference between any two consecutive numbers is constant.
Here's a step-by-step explanation of how the function works:
It initializes total to 0. This variable will hold the total number of arithmetic subsequences.
It creates an array dp of size equal to the length of the input array. Each element of dp is a Map that will store the count of arithmetic subsequences ending at each element of the input array, grouped by the difference of the subsequence.
It iterates over the input array. For each element nums[i]:
It initializes dp[i] to a new Map.
It iterates over all previous elements nums[j] of the array.
It calculates the difference diff between nums[i] and nums[j].
It gets the count of arithmetic subsequences with the same difference diff ending at nums[j] from dp[j]. If there are no such subsequences, it defaults to 0.
It increments the count of subsequences with difference diff ending at nums[i] by the previous count plus 1. The plus 1 accounts for the subsequence consisting of nums[j] and nums[i] itself.
It adds the previous count to total. This is because each arithmetic subsequence ending at nums[j] with difference diff can be extended to an arithmetic subsequence ending at nums[i] with the same difference.
After iterating over the entire array, it returns total, which is the total number of arithmetic subsequences in the array.
This function uses dynamic programming to efficiently count the number of arithmetic subsequences. The time complexity is O(n^2), where n is the length of the input array, because it needs to compare each pair of elements. The space complexity is also O(n^2), because it needs to store a count for each pair of elements.
*/
// Time complexity: O(n^2)
// Space complexity: O(n^2)

const numberOfArithmeticSlices = (nums: number[]) => {
  let total = 0;
  const dp = new Array(nums.length); 
  for (let i = 0; i < nums.length; i++) {
      dp[i] = new Map(); 
      for (let j = 0; j < i; j++) {
          const diff = nums[i] - nums[j];
          const subCount = dp[j].get(diff) || 0;
          dp[i].set(diff, (dp[i].get(diff) || 0) + subCount + 1);
          total += subCount;
      }
  }

  return total;
};


// --------------------------- LOGS --------------------------- //

console.log(numberOfArithmeticSlices([2,4,6,8,10]))
console.log(numberOfArithmeticSlices([7,7,7,7,7]))  
console.log(numberOfArithmeticSlices([1,2,3,4,5,6,7,8,9,10]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 446-ArithmeticSlicesIIsubsequence.ts