// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ---------------- 697 - Degree of an Array ------------------ //

/* Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:

Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6. */

// ------------------------ SOLUTION -------------------------- //

// Iterating over the array and storing the frequency of each element in an object.
// Iterating over the object and finding the max frequency.
// Iterating over the object again and finding the min length of the subarray with the max frequency.
// Time complexity: O(n)
// Space complexity: O(n)

const findShortestSubArray = (nums: number[]): number => {

  let minDegree = nums.length;
  const obj = {};
  let maxFreq = 0;
  const d = {};

  for(let i = 0;i < nums.length;i ++) {
      const num = nums[i];

      obj[num] = ++obj[num] || 1;
      maxFreq = Math.max(obj[num],maxFreq);

      if(num in d) {
          d[num] = [d[num][0] ,i]; 
      }else{
          d[num] = [i,0];
      }

  }

  for(const key in obj) {
      if(obj[key] === maxFreq) {
          minDegree = Math.min(minDegree,1 + Math.abs(d[key][1] - d[key][0]))
      }
  }    

  return minDegree;
};



// --------------------------- LOGS --------------------------- //

console.log(findShortestSubArray([1,2,2,3,1]))
console.log(findShortestSubArray([1,2,2,3,1,4,2]))
console.log(findShortestSubArray([1,2,2,3,1,4,2,1,1,1,1,1,1,1,1,1,1,1,1,1]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 697-degreeOfanArray.ts
