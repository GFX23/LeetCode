// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----------- 1207. Unique Number of Occurrences ------------- //

/* Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true */

// ------------------------ SOLUTION -------------------------- //

// Iterate over array and create a map with key as number and value as number of occurences
// Iterate over map and create a new Set with values from map
// Compare length of Set and length of map
// Return true if they are equal, false otherwise

// Time complexity: O(n)
// Space complexity: O(n)

const uniqueOccurrences = (arr: number[]): boolean => {
  let map = new Map()

  for (let i = 0; i < arr.length; i++) {
      map.set(arr[i], (map.get(arr[i]) || 0) +1)
  }

  return [...new Set(map.values())].length === map.size
};


// --------------------------- LOGS --------------------------- //

console.log(uniqueOccurrences([1,2,2,1,1,3]))
console.log(uniqueOccurrences([1,2]))
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1207-uniqueNumberOfOccurences.ts