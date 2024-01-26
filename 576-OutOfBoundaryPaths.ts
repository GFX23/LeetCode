// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --------------- 576. - Out of Boundary Paths --------------- //

/* There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.

Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.

Example 1:

Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
Output: 6
Example 2:


Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
Output: 12 */

// ------------------------ SOLUTION -------------------------- //

// Using memoization, we can store the number of paths for each cell and move.
// Time complexity: O(m*n*maxMove)
// Space complexity: O(m*n*maxMove)

const findPaths = (m: number, n: number, maxMove: number, startRow: number, startColumn: number): number => {
  const MOD = 10**9 + 7;
  const jak: number[][][] = Array.from({length: m}, () => 
              Array.from({length: n}, () => 
              Array(maxMove + 1).fill(-1)));
  const directions: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  const jaka = (x: number, y: number, move: number): number => {
      if (x < 0 || y < 0 || x >= m || y >= n) {
          return 1;
      }
      if (move === 0) {
          return 0;
      }
      if (jak[x][y][move] !== -1) {
          return jak[x][y][move];
      }
      let count = 0;
      for (let [dx, dy] of directions) {
          let nx = x + dx, ny = y + dy;
          count = (count + jaka(nx, ny, move - 1)) % MOD;
      }
      jak[x][y][move] = count; 
      return jak[x][y][move];
  }

  return jaka(startRow, startColumn, maxMove);
};


// --------------------------- LOGS --------------------------- //

console.log(findPaths(2, 2, 2, 0, 0))
console.log(findPaths(1, 3, 3, 0, 1))
console.log(findPaths(8, 7, 16, 1, 5))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 576-OutOfBoundaryPaths.ts