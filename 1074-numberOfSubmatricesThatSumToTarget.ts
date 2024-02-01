// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- ### - ############## ------------------- //

/* Given a matrix and a target, return the number of non-empty submatrices that sum to target.

A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.

Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate that is different: for example, if x1 != x1'.

 

Example 1:


Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
Output: 4
Explanation: The four 1x1 submatrices that only contain 0.
Example 2:

Input: matrix = [[1,-1],[-1,1]], target = 0
Output: 5
Explanation: The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.
Example 3:

Input: matrix = [[904]], target = 0
Output: 0 */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 

const numSubmatrixSumTarget = (matrix: number[][], target: number): number => {
  let m = matrix.length, n = matrix[0].length;
  for (let row of matrix) {
      for (let i = 0; i < n - 1; i++) {
          row[i + 1] += row[i];
      }
  }
  let result = 0;
  for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
          let c: {[key: number]: number} = {0: 1}, acc = 0;
          for (let k = 0; k < m; k++) {
              if (i > 0) {
                  matrix[k][j] -= matrix[k][i - 1];
              }
              acc += matrix[k][j];
              result += (c[acc - target] || 0);
              c[acc] = (c[acc] || 0) + 1;
          }
      }
  }
  return result;
};


// --------------------------- LOGS --------------------------- //

console.log(numSubmatrixSumTarget([[0,1,0],[1,1,1],[0,1,0]], 0))
console.log(numSubmatrixSumTarget([[1,-1],[-1,1]], 0))
console.log(numSubmatrixSumTarget([[904]], 0))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1074-numberOfSubmatricesThatSumToTarget.ts