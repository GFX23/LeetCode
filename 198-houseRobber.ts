// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --------------------- 198. House Robber -------------------- //

/* You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12. */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the array, keeping track of the max amount of money that can be robbed at each house.
// At each house, the max amount of money that can be robbed is either:
// 1. The max amount of money that can be robbed at the previous house (p)
// 2. The max amount of money that can be robbed two houses ago (pp) + the current house's money
// Return the max of p and pp

// Time complexity: O(n)
// Space complexity: O(1)

const rob = (nums: number[]): number => {
  if (nums.length === 0) {
      return 0
  }

  let [p, pp] = [0,0]

  for (let i = 0; i < nums.length; i++) {
      const temp = p
      p = Math.max(pp + nums[i], p)
      pp = temp
  }

  return Math.max(p, pp)
};


// --------------------------- LOGS --------------------------- //

console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))
console.log(rob([2,1,1,2]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 198-houseRobber.ts