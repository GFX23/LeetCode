// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ---------------- 1424 - DIAGONAL TRAVERSE ------------------ //

/* Given a 2D integer array nums, return all elements of nums in diagonal order as shown in the below images.

 

Example 1:


Input: nums = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,4,2,7,5,3,8,6,9]
Example 2:


Input: nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
Output: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16] */

// ------------------------ SOLUTION -------------------------- //

// Iterate over the array and store the elements in a map with the key as the sum of the indices.
// If the key is not present in the map, then add the key to the map and initialize the value as an empty array.
// Push the elements to the array corresponding to the key.

// Time complexity: O(n)
// Space complexity: 

const findDiagonalOrder = (nums: number[][]): number[] => {
  const groups: number[][] = [];
  for (let i = nums.length - 1; i >= 0; --i) {
      for (let j = 0; j < nums[i].length; ++j) {
          if (!groups[i + j]) groups[i + j] = [];
          groups[i + j].push(nums[i][j]);
      }
  }
  return groups.flat(1);
};

// --------------------------- LOGS --------------------------- //

console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(findDiagonalOrder([[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]))
console.log(findDiagonalOrder([[1,2,3],[4],[5,6,7],[8],[9,10,11]]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1424-diagonalTraverse.ts