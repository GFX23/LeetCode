// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ---------------- 573 - Squirrel Simulation ----------------- //

// --- https://leetcode.com/problems/squirrel-simulation/description/ ---

/* You are given two integers height and width representing a garden of size height x width. You are also given:

an array tree where tree = [treer, treec] is the position of the tree in the garden,
an array squirrel where squirrel = [squirrelr, squirrelc] is the position of the squirrel in the garden,
and an array nuts where nuts[i] = [nutir, nutic] is the position of the ith nut in the garden.
The squirrel can only take at most one nut at one time and can move in four directions: up, down, left, and right, to the adjacent cell.

Return the minimal distance for the squirrel to collect all the nuts and put them under the tree one by one.

The distance is the number of moves.


Example 1:


Input: height = 5, width = 7, tree = [2,2], squirrel = [4,4], nuts = [[3,0], [2,5]]
Output: 12
Explanation: The squirrel should go to the nut at [2, 5] first to achieve a minimal distance.
Example 2:


Input: height = 1, width = 3, tree = [0,1], squirrel = [0,0], nuts = [[0,2]]
Output: 3 */

// ------------------------ SOLUTION -------------------------- //

// Check the distance from the tree to each nut and add it to the total distance.
// Keep track of the closest distance from the squirrel to the nut.
// Subtract the closest distance from the total distance.
// Return the total distance.

// Time complexity: O(n)
// Space complexity: O(1)

const minDistance = (height: number, width: number, tree: number[], squirrel: number[], nuts: number[][]): number => {
  const checkDistance = (arr1: number[], arr2: number[]): number => 
      Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1])

  let dist = 0
  let closest = -Infinity

  for (let i = 0; i < nuts.length; i++) {
      dist += checkDistance(nuts[i], tree)*2
      closest = Math.max(closest, checkDistance(nuts[i], tree) - checkDistance(nuts[i], squirrel))
  }

  return dist - closest
};

// --------------------------- LOGS --------------------------- //

console.log(minDistance(5, 7, [2,2], [4,4], [[3,0], [2,5]]))
console.log(minDistance(1, 3, [0,1], [0,0], [[0,2]]))
console.log(minDistance(5, 5, [3,2], [0,1], [[2,0], [4,1], [0,4], [1,3], [1,0], [3,4], [3,0], [2,3], [0,2], [0,0], [2,2], [4,2], [3,3], [4,4], [4,0], [4,3], [3,1], [2,1], [1,4], [2,4]]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 573-squirrelSimulation.ts