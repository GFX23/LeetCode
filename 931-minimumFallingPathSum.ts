// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// -------------- 931. Minimum Falling Path Sum --------------- //

/* Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

Example 1:

Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum as shown.
Example 2:


Input: matrix = [[-19,57],[-40,-5]]
Output: -59
Explanation: The falling path with a minimum sum is shown.
 */

// ------------------------ SOLUTION -------------------------- //

// Iterate from the second last row to the first row
// For each element, add the minimum of the three elements in the next row
// Return the minimum element in the first row

// Time complexity: O(n^2)
// Space complexity: O(1)

const minFallingPathSum = (matrix: number[][]): number => {
  const n = matrix.length;
  for(let i = n-2; i >= 0; i--){
      for(let j = 0 ; j < n; j++){
          const bl = matrix[i+1][(j-1) < 0 ? 0 : j-1];
          const b = matrix[i+1][j];
          const br = matrix[i+1][(j+1) > n-1 ? n-1 : j+1];
          
          matrix[i][j] += Math.min(bl, b, br);
      }
  }

  return Math.min(...matrix[0]);
};


// --------------------------- LOGS --------------------------- //

console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]))
console.log(minFallingPathSum([[-19,57],[-40,-5]]))
console.log(minFallingPathSum([[1]]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 931-minimumFallingPathSum.ts