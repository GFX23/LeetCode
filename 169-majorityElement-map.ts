// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----------------- 169 - Majority Element ------------------- //

/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2 */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the array and count the occurences of each number.
// If the count of the number is greater than half the length of the array, return the number.

// Time complexity: O(n)
// Space complexity: O(n)

const majorityElementMap = (nums: number[]): number => {
  let map = new Map
  for (let i = 0; i < nums.length; i++) {
      const current = (map.get(nums[i]) || 0) + 1
      if (current >= nums.length / 2) {
          return nums[i]
      }
      map.set(nums[i], current)
  }
  return -1
};


// --------------------------- LOGS --------------------------- //

console.log(majorityElementMap([3,2,3])) // 3
console.log(majorityElementMap([2,2,1,1,1,2,2])) // 2 
console.log(majorityElementMap([4,5,6,6,5,4,6])) // 6   

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 169-majorityElement-map.ts