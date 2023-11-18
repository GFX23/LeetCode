// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------- 1877 - MINIMIZE MAXIMUM PAIR SUM ------------- //

/* The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.

For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:

Each element of nums is in exactly one pair, and
The maximum pair sum is minimized.
Return the minimized maximum pair sum after optimally pairing up the elements.

 

Example 1:

Input: nums = [3,5,2,3]
Output: 7
Explanation: The elements can be paired up into pairs (3,3) and (5,2).
The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.
Example 2:

Input: nums = [3,5,4,2,4,6]
Output: 8
Explanation: The elements can be paired up into pairs (3,5), (4,4), and (6,2).
The maximum pair sum is max(3+5, 4+4, 6+2) = max(8, 8, 8) = 8.
 */

// ------------------------ SOLUTION -------------------------- //

// Sort the array, then pair the smallest number with the largest number, and so on.
// Return the largest sum of the pairs.
// Time complexity: O(n log n)
// Space complexity: O(n)

const minPairSum = (nums: number[]): number => {
  let newArr = nums.sort((a,b) => a - b)
  let start = 0
  let end = newArr.length-1
  let maxNum = 0
     while (start < end) {
         maxNum = Math.max(maxNum, newArr[start] + newArr[end])
         start++
         end--
     }
     return maxNum
 };

// --------------------------- LOGS --------------------------- //

console.log(minPairSum([3,5,2,3]))
console.log(minPairSum([3,5,4,2,4,6]))
console.log(minPairSum([1,2,3,4,5,6]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1877-minimizeMaximumPairSum.ts