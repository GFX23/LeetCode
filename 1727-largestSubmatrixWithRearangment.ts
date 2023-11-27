// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------ 1727 - LARGEST SUBMATRIX WITH REARRANGEMENTS -------- //

/* You are given a binary matrix matrix of size m x n, and you are allowed to rearrange the columns of the matrix in any order.

Return the area of the largest submatrix within matrix where every element of the submatrix is 1 after reordering the columns optimally.

 

Example 1:


Input: matrix = [[0,0,1],[1,1,1],[1,0,1]]
Output: 4
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 4.
Example 2:


Input: matrix = [[1,0,1,0,1]]
Output: 3
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 3.
Example 3:

Input: matrix = [[1,1,0],[1,0,1]]
Output: 2
Explanation: Notice that you must rearrange entire columns, and there is no way to make a submatrix of 1s larger than an area of 2. */

// ------------------------ SOLUTION -------------------------- //

// Sort rows by their height
// For each row, find the largest rectangle in a histogram
// Return the largest rectangle
// Time complexity: 
// Space complexity: 

const largestSubmatrix = (matrix: number[][]): number => {
  let m = matrix.length
  let n = matrix[0].length
  let ans = 0


  for (let row = 0; row < m; row++) {
      for (let col = 0; col < n; col++) {
          if (matrix[row][col] !== 0 && row > 0) {
              matrix[row][col] += matrix[row-1][col]
          }
      }
      let currRow = matrix[row].sort((a,b) => b - a)
      for (let i = 0; i < n; i++) {
          ans = Math.max(ans, currRow[i] * (i +1))
      }
  }

  return ans
};



// --------------------------- LOGS --------------------------- //

console.log(largestSubmatrix([[0,0,1],[1,1,1],[1,0,1]]))
console.log(largestSubmatrix([[1,0,1,0,1]]))
console.log(largestSubmatrix([[1,1,0],[1,0,1]]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1727-largestSubmatrixWithRearangment.ts