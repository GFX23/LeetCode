/* Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted. */

const intersection = (nums1: number[], nums2: number[]): number[] => {
  // initialize variable for result
  let result: number[] = []

  //iterate through array, checking if integer is already in second array
  for (let i = 0; i < nums1.length; i++) {

    // if yes, then add into result
    if (nums2.includes(nums1[i]) ) {
      result = [...result, nums1[i]]
    }
  }

  // removing duplicates and returning
  return [...new Set(result)]
}

// -------------- SECOND SOLUTION - ONE LINER ------------------

const intersection2 = (nums1: number[], nums2: number[]): number[] => {
  return [...new Set(nums1.filter(num => nums2.includes(num)))]
}

console.log(intersection([1,2,2,1], [2,2]))
console.log(intersection([4,9,5], [9,4,9,8,4]))

console.log("SECOND SOLUTION")

console.log(intersection2([1,2,2,1], [2,2]))
console.log(intersection2([4,9,5], [9,4,9,8,4]))

// run ts-node 349-intersetionOfTwoArrays.ts