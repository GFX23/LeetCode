// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------ 279 - Perfect Squares -------------------- //

/* Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

 

Example 1:

Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
 */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 

const numSquares = (n: number): number => {
  const squares: number[] = [0,1];
  for (let i = 2; i <= n; i++) {
    squares[i] = Infinity;

    for (let j = 1; j * j <= i; j++) {
      const numSquares = squares[i - j * j] + 1;
      squares[i] = Math.min(squares[i], numSquares);
    }
  }

  return squares[n];
}


// --------------------------- LOGS --------------------------- //

console.log(numSquares(12)) //3
console.log(numSquares(13)) //2
console.log(numSquares(1)) //1

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 279-perfectSquare.ts