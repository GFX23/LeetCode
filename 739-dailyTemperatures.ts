// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- ### - ############## ------------------- //

/* Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0] */

// ------------------------ SOLUTION -------------------------- //

// Iterate over the array, and check if the difference between the first and the last element is less than or equal to k. If it is, push the array to the result array. If not, return an empty array.

// Time complexity: O(n log n)
// Space complexity: O(n)

const dailyTemperatures = (temperatures: number[]): number[] => {
  const stack: number[] = [];
  const answer: number[] = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
      while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
          const index = stack.pop()!;
          answer[index] = i - index;
      }
      stack.push(i);
  }
  return answer;
}


// --------------------------- LOGS --------------------------- //

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
console.log(dailyTemperatures([30,40,50,60]))
console.log(dailyTemperatures([30,60,90]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 739-dailyTemperatures.ts