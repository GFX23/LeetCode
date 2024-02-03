// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --------- 1043 - Partition Array for Maximum Sum ----------- //

/* Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray.

Return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a 32-bit integer.

 

Example 1:

Input: arr = [1,15,7,9,2,5,10], k = 3
Output: 84
Explanation: arr becomes [15,15,15,9,10,10,10]
Example 2:

Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
Output: 83
Example 3:

Input: arr = [1], k = 1
Output: 1 */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 

const maxSumAfterPartitioning = (arr: number[], k: number): number => {
  const dp: number[] = Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let maxVal: number = 0;
    let ans: number = 0;
    let j = i

    while (j >= 0 && i - j + 1 <= k) {
      maxVal = Math.max(maxVal, arr[j]);
      ans = Math.max(ans, (i - j + 1) * maxVal + (j > 0 ? dp[j - 1] : 0));
      j--
    }

    dp[i] = ans;
  }

  return dp[arr.length - 1];
};


// --------------------------- LOGS --------------------------- //

console.log(maxSumAfterPartitioning([1,15,7,9,2,5,10], 3)) // 84
console.log(maxSumAfterPartitioning([1,4,1,5,7,3,6,1,9,9,3], 4)) // 83
console.log(maxSumAfterPartitioning([1], 1)) // 1

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1043-partitionArrayForMaximumSum.ts