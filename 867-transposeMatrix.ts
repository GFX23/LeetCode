// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----------------- 867 - TRANSPOSE MATRIX ------------------- //

/* Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]] */

// ------------------------ SOLUTION -------------------------- //

// Iterating over the matrix and pushing the values to the new array
//
// Time complexity: O(n^2)
// Space complexity: O(n^2)

const transpose = (matrix: number[][]): number[][] => {
  const res: number[][] = [];

  for (let i = 0; i < matrix[0].length; i++) {
      res[i] = [];

      for (let j = 0; j < matrix.length; j++) {
          res[i][j] = matrix[j][i];
      }
  }

  return res;
};



// --------------------------- LOGS --------------------------- //

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))
console.log(transpose([[1,2,3],[4,5,6]]))
console.log(transpose([[1,2,3]]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 867-transposeMatrix.ts 