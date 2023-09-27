/* Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that 
  nums[i] == nums[j] and abs(i - j) <= k. /*

  /* Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false */

const containsNearbyDuplicate = (nums: number[], k: number): boolean => {

  // Iterating through array of nums
  for (let i = 0; i < nums.length; i++) {

      // Iterating through specified positions by "k" number
      for (let j = 0; j < k; j++ ) {
          // Checking positive side of array
          if (nums[i] === nums[j+i+1]) {
              return true
          }
          // Checking negative side of array with treated possibility of negative value on iterating (i - k >= 0)
          if (i - k >= 0 && nums[i] === nums[j-k+i]){
              return true
          }
      }
  }
  return false
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))