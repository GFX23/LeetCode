// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----------- 594 - LONGEST HARMONIOUS SUBSEQUENCE ----------- //

/* We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
Example 2:

Input: nums = [1,2,3,4]
Output: 2
Example 3:

Input: nums = [1,1,1,1]
Output: 0 */

// ------------------------ SOLUTION -------------------------- //

// Setting hash map to count the frequency of each number, then iterate through the map and check if the map has the key + 1, 
// if so, add the value of the key + 1 to the value of the key and compare it to the max value. Return the max value.
// Time complexity: O(n)
// Space complexity: O(n)

const findLHS = (nums: number[]): number => {
  let max = 0
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  for (let [key, value] of map) {
    if (map.has(key + 1)) {
      max = Math.max(max, value + map.get(key + 1))
    }
  }

  return max
}


// --------------------------- LOGS --------------------------- //

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))
console.log(findLHS([1, 2, 3, 4]))
console.log(findLHS([1, 1, 1, 1]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 594-longestHarmoniousSub.ts