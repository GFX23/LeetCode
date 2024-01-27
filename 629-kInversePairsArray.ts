// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ---------------- 629. K Inverse Pairs Array ------------------- //

/* For an integer array nums, an inverse pair is a pair of integers [i, j] where 0 <= i < j < nums.length and nums[i] > nums[j].

Given two integers n and k, return the number of different arrays consist of numbers from 1 to n such that there are exactly k inverse pairs. Since the answer can be huge, return it modulo 109 + 7.


Example 1:

Input: n = 3, k = 0
Output: 1
Explanation: Only the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pairs.
Example 2:

Input: n = 3, k = 1
Output: 2
Explanation: The array [1,3,2] and [2,1,3] have exactly 1 inverse pair.
 */

// ------------------------ SOLUTION -------------------------- //

// Using Dynamic Programming

// Time complexity: O(n*k)
// Space complexity: O(n*k)

const kInversePairs = (n: number, k: number): number => {
  const dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));
  dp[0][0] = 1;
  const mod = 1000000007;

  for(let i = 1; i <= n; i++) {
    let val = 0;
    for(let j = 0; j <= k; j++) {
      val += dp[i - 1][j];
      if(j >= i) val -= dp[i - 1][j - i];
      if(val < 0) val += mod;
      val = (val % mod);
      dp[i][j] = val;
    }
  }
  return (dp[n][k]);
};


// --------------------------- LOGS --------------------------- //

console.log(kInversePairs(3, 0)) // 1
console.log(kInversePairs(3, 1)) // 2
console.log(kInversePairs(3, 2)) // 2

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 629-kInversePairsArray.ts