// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// - 1481 - Least number of Unique Integers after K Removals -- //

/* Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

 

Example 1:

Input: arr = [5,5,4], k = 1
Output: 1
Explanation: Remove the single 4, only 5 is left.
Example 2:
Input: arr = [4,3,1,1,3,3,2], k = 3
Output: 2
Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left. */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the array and count the frequency of each number, then sort the frequency in ascending order.
// Iterate through the frequency array and subtract the frequency from k, if k becomes negative, then return the length of the frequency array.
// If k is still positive, then return 0.

// Time complexity: O(nlogn)
// Space complexity: O(n)

function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const map = new Map();
  for(const a of arr) {
      if(map.has(a)) {
          map.set(a, map.get(a) + 1)
      }else {
          map.set(a, 1)
      }
  };
  const dArr = [...map.entries()];
  dArr.sort((a, b) => a[1] - b[1]);
  let i=0,sum=0;
  while(sum < k ) {
      sum+=dArr[i][1]
      if(!(sum > k))
          i++;
  }
  return dArr.length - i;
};


// --------------------------- LOGS --------------------------- //

console.log(findLeastNumOfUniqueInts([5,5,4], 1)) // 1
console.log(findLeastNumOfUniqueInts([4,3,1,1,3,3,2], 3)) // 2  
console.log(findLeastNumOfUniqueInts([1,2,3,4,5], 5)) // 0

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1481-leastNumberOfUniqueIntegers.ts