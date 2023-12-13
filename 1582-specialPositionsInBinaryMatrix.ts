// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------- 1582 - SPECIAL POSITIONS IN BINARY MATRIX ---------- //

/* Given an m x n binary matrix mat, return the number of special positions in mat.

A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

 

Example 1:


Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
Output: 1
Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.
Example 2:


Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
Explanation: (0, 0), (1, 1) and (2, 2) are special positions. */

// ------------------------ SOLUTION -------------------------- //

// Setting up good() function to check if a position is special
// good() takes in a row and column index
// good() returns a boolean
// good() checks if the value at the given index is 0
// if it is, it returns false
// if it is not, it checks if the rest of the row is 0
// if it is not, it checks if the rest of the column is 0
// if it is not, it returns true
// Return the number of special positions in mat

// Time complexity: O(n^2)
// Space complexity: O(1)

const numSpecial = (mat: number[][]): number => {
  let good = (i: number, j: number): boolean => {
    let num = mat[i][j];
    if (num === 0) return false;

    let row = mat[i];
    for (let k = 0; k < row.length; k++) {
      if (row[k] === 1 && k !== j) return false;
    }

    for (let k = 0; k < mat.length; k++) {
      if (mat[k][j] === 1 && k !== i) return false;
    }
    return true;
  };

  let ans = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (good(i, j)) {
        ans++;
      }
    }
  }
  return ans;
}



// --------------------------- LOGS --------------------------- //

console.log(numSpecial([[1,0,0],[0,0,1],[1,0,0]]))
console.log(numSpecial([[1,0,0],[0,1,0],[0,0,1]]))
console.log(numSpecial([[0,0,0,1],[1,0,0,0],[0,1,1,0],[0,0,0,0]]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1582-specialPositionsInBinaryMatrix.ts