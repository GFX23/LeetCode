// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// -- 1287 - ELEMENT APPEARING MORE THAN 25% IN SORTED ARRAY -- //

/* Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6
Example 2:

Input: arr = [1,1]
Output: 1 */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 

const findSpecialInteger = (arr: number[]): number => {
  let map = new Map()
  let max = 0
  let index = 0
  for (let num of arr) {
      if (!map.has(num)) {
          map.set(num, 1)
      } else {
          map.set(num, map.get(num) +1)
      }
  }

  for (let [key, value] of map) {
      if (value >= max) {
          index = key
          max = value
      }
  }
  return index
};



// --------------------------- LOGS --------------------------- //

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))
console.log(findSpecialInteger([1,1]))
console.log(findSpecialInteger([1,2,3,3]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1287-elementAppearingMoreThan25percent.ts