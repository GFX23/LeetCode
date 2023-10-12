// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 461 - HAMMING DISTANCE ------------------- //

/* The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.

 

Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
Example 2:

Input: x = 3, y = 1
Output: 1 */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: O(n)
// Space complexity: O(1)

const hammingDistance = (x: number, y: number) => {
  console.log(x ^ y)
  return (x ^ y).toString(2).split("").reduce((acc, cur) => acc + Number(cur), 0)
}



// --------------------------- LOGS --------------------------- //

console.log(hammingDistance(1,4))
console.log(hammingDistance(3,1))
console.log(hammingDistance(93,73))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 461-hammingDistance.ts