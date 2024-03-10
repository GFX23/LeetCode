// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------- 3005 - Count elements with maximum Frequency ------- //

/* You are given an array nums consisting of positive integers.

Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

The frequency of an element is the number of occurrences of that element in the array.

 

Example 1:

Input: nums = [1,2,2,3,1,4]
Output: 4
Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
So the number of elements in the array with maximum frequency is 4.
Example 2:

Input: nums = [1,2,3,4,5]
Output: 5
Explanation: All elements of the array have a frequency of 1 which is the maximum.
So the number of elements in the array with maximum frequency is 5. */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 

const maxFrequencyElements = (nums: number[]): number => {
  const frequenciesMap = new Map()
  let maxFreq = 0

  for (let i = 0; i < nums.length; i++) {
    const get = frequenciesMap.get(nums[i]) + 1 || 1
    if (maxFreq < get) maxFreq = get

    frequenciesMap.set(nums[i], get)
  }

  return Array.from(frequenciesMap).filter(el => el[1] === maxFreq).length * maxFreq
}


// --------------------------- LOGS --------------------------- //

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4])) // 4
console.log(maxFrequencyElements([1, 2, 3, 4, 5])) // 5
console.log(maxFrequencyElements([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5])) // 7

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 3005-countElementsWithMaximum.ts