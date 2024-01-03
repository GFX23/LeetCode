// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// -- 2610. Convert an Array Into a 2D Array With Conditions -- //

/* You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

The 2D array should contain only the elements of the array nums.
Each row in the 2D array contains distinct integers.
The number of rows in the 2D array should be minimal.
Return the resulting array. If there are multiple answers, return any of them.

Note that the 2D array can have a different number of elements on each row.

 

Example 1:

Input: nums = [1,3,4,1,2,3,1]
Output: [[1,3,4,2],[1,3],[1]]
Explanation: We can create a 2D array that contains the following rows:
- 1,3,4,2
- 1,3
- 1
All elements of nums were used, and each row of the 2D array contains distinct integers, so it is a valid answer.
It can be shown that we cannot have less than 3 rows in a valid array.
Example 2:

Input: nums = [1,2,3,4]
Output: [[4,3,2,1]]
Explanation: All elements of the array are distinct, so we can keep all of them in the first row of the 2D array.
 */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the array and count the number of occurrences of each element.
// Create a new array with the length of the maximum number of occurrences.
// Iterate through the array and push each element to the array at the index of its number of occurrences minus one.
// Return the array.

// Time complexity: O(n)
// Space complexity: O(n)

const findMatrix = (nums: number[]): number[][] => {
  let ans: number[][] = [[]];
  let counts: number[] = Array(nums.length + 1).fill(0);

  nums.forEach(num => {
      counts[num] = (counts[num] || 0) + 1;
      if (counts[num] > ans.length) {
          ans.push([]);
      }
      ans[counts[num] - 1].push(num);
  });

  return ans;
};


// --------------------------- LOGS --------------------------- //

console.log(findMatrix([1,3,4,1,2,3,1]))
console.log(findMatrix([1,2,3,4]))
console.log(findMatrix([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 2610-convertAnArrayInto2DArrayWithConditions.ts