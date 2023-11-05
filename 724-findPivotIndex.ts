// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------ 724 - FIND PIOT INDEX ------------------- //

/* Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0 */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the array and check if the sum of all elements to the left of the current element
// is equal to the sum of all elements to the right of the current element.
// If so, return the current index.
// Time complexity: O(n)
// Space complexity: O(n)

const pivotIndex = (nums: number[]): number => {
  let prefixes: number[] = [nums[0]];
  let leftSum: number = 0;

  for (let i = 1; i < nums.length; i++) {
      prefixes.push(nums[i] + prefixes[i - 1])
  }

  for (let i = 0; i < prefixes.length; i++) {
      if (leftSum === prefixes[prefixes.length - 1] - nums[i] - leftSum) {
          return i;
      }

      leftSum += nums[i];
  }

  return -1;
};



// --------------------------- LOGS --------------------------- //

console.log(pivotIndex([1,7,3,6,5,6]))
console.log(pivotIndex([1,2,3]))
console.log(pivotIndex([2,1,-1]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 724-findPivotIndex.ts