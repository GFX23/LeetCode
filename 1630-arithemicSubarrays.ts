// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --------------- 1630 - Arithmetic subarrays ---------------- //

/* A sequence of numbers is called arithmetic if it consists of at least two elements, and the difference between every two consecutive elements is the same. More formally, a sequence s is arithmetic if and only if s[i+1] - s[i] == s[1] - s[0] for all valid i.

For example, these are arithmetic sequences:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
The following sequence is not arithmetic:

1, 1, 2, 5, 7
You are given an array of n integers, nums, and two arrays of m integers each, l and r, representing the m range queries, where the ith query is the range [l[i], r[i]]. All the arrays are 0-indexed.

Return a list of boolean elements answer, where answer[i] is true if the subarray nums[l[i]], nums[l[i]+1], ... , nums[r[i]] can be rearranged to form an arithmetic sequence, and false otherwise.

 

Example 1:

Input: nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]
Output: [true,false,true]
Explanation:
In the 0th query, the subarray is [4,6,5]. This can be rearranged as [6,5,4], which is an arithmetic sequence.
In the 1st query, the subarray is [4,6,5,9]. This cannot be rearranged as an arithmetic sequence.
In the 2nd query, the subarray is [5,9,3,7]. This can be rearranged as [3,5,7,9], which is an arithmetic sequence.
Example 2:

Input: nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]
Output: [false,true,false,false,true,true] */

// ------------------------ SOLUTION -------------------------- //

// Create a function that will check if the subarray is arithmetic
// First, sort the subarray
// Then, find the difference between the first two elements
// Iterate over the array and check if the difference is the same for every two consecutive elements
// If it is, return true, otherwise return false
// Create a function that will iterate over the l and r arrays and call the isArithmetic function on the subarray
// Return the result array

// Time complexity: O(n^2)
// Space complexity: O(n)

const checkArithmeticSubarrays = (nums: number[], l: number[], r: number[]): boolean[] => {
  const result: boolean[] = [];

  for (let i = 0; i < r.length; i++) {
      const subarray: number[] = nums.slice(l[i], r[i] + 1);
      result.push(isArithmetic(subarray));
  }

  return result;
}

const isArithmetic = (arr: number[]): boolean => {
  arr.sort((a, b) => a - b);

  const diff: number = arr[1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (diff !== (arr[i] - arr[i - 1])) {
          return false;
      }
  }

  return true;
};



// --------------------------- LOGS --------------------------- //

console.log(checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5]))
console.log(checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10]))  
console.log(checkArithmeticSubarrays([1,2,3,4,5,6,7,8,9,10], [0], [9])  )

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1630-arithmeticSubarrays.ts