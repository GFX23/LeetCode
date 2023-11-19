// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----- 1838 - FREQUENCY OF THE NOST FREQUENT ELEMENT -------- //

/* The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.

 

Example 1:

Input: nums = [1,2,4], k = 5
Output: 3
Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
4 has a frequency of 3.
Example 2:

Input: nums = [1,4,8,13], k = 5
Output: 2
Explanation: There are multiple optimal solutions:
- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.
Example 3:

Input: nums = [3,9,6], k = 2
Output: 1 */

// ------------------------ SOLUTION -------------------------- //

// Sort the array of frequencies.
// Iterate through the sorted array and add the frequencies to a sum.
// If the sum is greater than k, subtract the largest frequency from the sum.
// Return the length of the sorted array minus the sum.

// Time complexity: O(n log n)
// Space complexity: O(1)

const maxFrequency = (nums: number[], k: number): number => {
  nums.sort((a,b) => a-b)
  let left = 0
  let curr = 0
  let ans = 0

  for (let i = 0; i < nums.length; i++) {
      let target = nums[i]
      curr += target
      while ((i - left +1) * target - curr > k) {
          curr -= nums[left]
          left++
      }

      ans = Math.max(ans, i -left +1)
  }
  return ans
  
};


// --------------------------- LOGS --------------------------- //

console.log(maxFrequency([1,2,4], 5))
console.log(maxFrequency([1,4,8,13], 5))
console.log(maxFrequency([3,9,6], 2))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1838-FrequencyOfTheMostFrequent.ts