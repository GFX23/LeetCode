// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --------- 1578 - MINIMUM TIME TO MAKE ROPE COLORFUL -------- //

/* Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.

Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.

Return the minimum time Bob needs to make the rope colorful.

 

Example 1:


Input: colors = "abaac", neededTime = [1,2,3,4,5]
Output: 3
Explanation: In the above image, 'a' is blue, 'b' is red, and 'c' is green.
Bob can remove the blue balloon at index 2. This takes 3 seconds.
There are no longer two consecutive balloons of the same color. Total time = 3.
Example 2:


Input: colors = "abc", neededTime = [1,2,3]
Output: 0
Explanation: The rope is already colorful. Bob does not need to remove any balloons from the rope.
Example 3:


Input: colors = "aabaa", neededTime = [1,2,3,4,1]
Output: 2
Explanation: Bob will remove the ballons at indices 0 and 4. Each ballon takes 1 second to remove.
There are no longer two consecutive balloons of the same color. Total time = 1 + 1 = 2.
 */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the string, keeping track of the current max time and the total time. 
// If the current character is different from the previous one, reset the current max time. 
// Otherwise, add the current time to the total time and update the current max time if the current time is greater than the current max time.
// Time complexity: O(n) where n is the length of the string
// Space complexity: O(1)

const minCost = (s, cost) => {
  let totalTime = 0, currMaxTime = 0;
  for (let i = 0; i < s.length; ++i) {
      if (i > 0 && s[i] != s[i - 1]) {
          currMaxTime = 0;
      }
      totalTime += Math.min(currMaxTime, cost[i]);
      currMaxTime = Math.max(currMaxTime, cost[i]);
  }
  return totalTime;
};



// --------------------------- LOGS --------------------------- //

console.log(minCost("abaac", [1,2,3,4,5]))
console.log(minCost("abc", [1,2,3]))
console.log(minCost("aabaa", [1,2,3,4,1]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1578-minimumTimeToMakeRopeColorful.ts