// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// -------------- 907. Sum of Subarray Minimums --------------- //

/* Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

Example 1:

Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.
Example 2:

Input: arr = [11,81,94,43,3]
Output: 444
  */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 

const sumSubarrayMins = (arr: number[]): number => {
  let ans = 0;
  let  mod = 1e9 +7
  let stack = [ -1 ] 
  arr.push(-Infinity) 
  for ( let i = 0; i < arr.length; i++) {
    while ( arr[stack[stack.length - 1]] > arr[i] ) {
      let idx = stack.pop() || 0;
      ans += arr[idx]*(i - idx)*(idx - stack[stack.length - 1])
    }
    stack.push(i)
  }
  return ans%mod
};


// --------------------------- LOGS --------------------------- //

console.log(sumSubarrayMins([3,1,2,4]))
console.log(sumSubarrayMins([11,81,94,43,3]))
console.log(sumSubarrayMins([71,55,82,55]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 907-sumOfSubArrayMinimums.ts