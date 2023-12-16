// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// -------------- 746 - MIN COST CLIMBING STAIRS -------------- //

/* You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

 

Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6. */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the array, keeping track of the minimum cost to reach the current step.
// The minimum cost to reach the current step is the minimum of the previous two steps' costs plus the cost of the current step.
// Return the minimum of the last two steps' costs.

// Time complexity: O(n)
// Space complexity: O(1)

const minCostClimbingStairs = (cost: number[]): number => {
  if (cost.length < 2) return 0;
  
  let zeroInd = 0;
  let oneInd = 0;

  for (let step = 0; step < cost.length; step++) {        
      const temp = Math.min(zeroInd, oneInd) + cost[step];
      zeroInd = oneInd;
      oneInd = temp;
  }

  return Math.min(zeroInd, oneInd);
};



// --------------------------- LOGS --------------------------- //

console.log(minCostClimbingStairs([10,15,20]))
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))
console.log(minCostClimbingStairs([0,0,0,1]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 746-minCostClimbingStairs.ts