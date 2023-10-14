// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --------------- 496 - NEXT GREATER ELEMENT I --------------- //

/* The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
Example 2:

Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1. */

// ------------------------ SOLUTION -------------------------- //

// Iterating through array nums1, searching for the index of the element in nums2, then iterating through nums2 starting from that index, searching for the next greater element. 
// If there is no next greater element, then the answer for this query is -1.
// Time complexity: O(n^2)
// Space complexity: O(1)

const nextGreaterElement = (nums1: number[], nums2: number[]): number[] => {
  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]);
    let nextGreater = -1;
    for (let j = index; j < nums2.length; j++) {
      console.log(nums2[j], nums1[i])
      if (nums2[j] > nums1[i]) {
        nextGreater = nums2[j];
        break;
      }
    }
    nums1[i] = nextGreater;
  }
  return nums1;
}

// ------------------------ SOLUTION 2 ------------------------ //

// Using stack to store the elements of nums2, then iterating through nums2, searching for the next greater element.
// Time complexity: O(n)
// Space complexity: O(1)

const nextGreaterElement2 = (nums1: number[], nums2: number[]): number[] => {
  const stack: number[] = [];
  const nextGreaterMap: Record<number, number> = {};

  for (const num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      nextGreaterMap[stack.pop()!] = num;
      console.log(nextGreaterMap)
    }
    stack.push(num);
  }

  return nums1.map((num) => nextGreaterMap[num] || -1);
};



// --------------------------- LOGS --------------------------- //

console.log(nextGreaterElement([4,1,2], [1,3,4,2]))
console.log(nextGreaterElement([2,4], [1,2,3,4]))
console.log(nextGreaterElement([4,1,2], [1,3,4,2]))

console.log(nextGreaterElement2([4,1,2], [1,3,4,2]))
console.log(nextGreaterElement2([2,4], [1,2,3,4]))
console.log(nextGreaterElement2([4,1,2], [1,3,4,2]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 496-nextGreaterElement.ts