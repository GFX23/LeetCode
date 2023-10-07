// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----------------------- 1 - TWO SUM ------------------------ //

/* Desc.: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

// ------------------------ SOLUTION 1 ------------------------ //

// Iterating through sorted array, while idx === idx+1, returning true, else false
// Time complexity: O(n^2)
// Space complexity: O(1)

const twoSum = (nums: number[], target: number): number[] | void => {
  
  // nested for loop solution
  for (let i = 0; i < nums.length; i++) {
    
    // j = i+1 because we already checked number before i
    for (let j = i + 1; j < nums.length; j++) {
      // returning match
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
};

// ------------------------ SOLUTION 2 ------------------------ //

// Using hashmap to store, finding missing num, then checking every iteration if
// this number is stored in hashmap and if true returning index of this number.
// Time complexity: O(n)
// Space complexity: O(n)

interface MapProps {
  [key: number]: number
}

const twoSum2 = (nums: number[], target: number): number[] | void => {
  
  
  // setting map variable
  const map:MapProps = {};
  for (let i = 0; i < nums.length; i++) {
    const missingNum: number = target - nums[i];
    
    if (map.hasOwnProperty(missingNum)) {
      return [map[missingNum], i];
    }
    
    // handle the case when current num is 0
    if (nums[i] === 0 && map[missingNum] !== undefined) {
      return [map[missingNum], i];
    }
    map[nums[i]] = i;
  }
};


// --------------------------- LOGS --------------------------- //

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

// --------------------------- LOGS --------------------------- //

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));
console.log(twoSum2([3, 3], 6));

// ----------------------- CLI COMMAND ------------------------ //

// run ts-node 1-twoSum.ts
