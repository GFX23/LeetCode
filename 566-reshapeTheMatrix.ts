// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ---------------- 566 - Reshape the Matrix ------------------ //

/* In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

 

Example 1:


Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
Example 2:


Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]] */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 


const matrixReshape = (nums: number[][], r: number, c: number): number[][] => {
  const numsArr: number[] = nums.flat()
  if (numsArr.length !== r * c) return nums
  const result: number[][] = []
  for (let i = 0; i < r; i++) {
    result.push(numsArr.splice(0, c))
  }
  return result
}

// --------------------------- LOGS --------------------------- //

console.log(matrixReshape([[1,2],[3,4]], 1, 4))
console.log(matrixReshape([[1,2],[3,4]], 2, 4))
console.log(matrixReshape([[1,2],[3,4]], 4, 1))

// ----------------------- CLI COMMAND ------------------------ //

// run ts-node 566-reshapeTheMatrix.ts
