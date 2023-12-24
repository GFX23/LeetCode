// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 1496 - PATH CROSSING ------------------- //

/* Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

 

Example 1:


Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.
Example 2:


Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice. */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the string, keeping track of the current position.
// If the current position is already in the set, return true.
// If not, add it to the set and continue.
// If the loop completes, return false.

// Time complexity: O(n)
// Space complexity: O(n)

const isPathCrossing = (path: string): boolean => {
  const movesN = {N: [1,0], S: [-1,0], E: [0,1], W: [0, -1]}
  const position = [0,0]
  const positions = new Set(["0,0"])

  for (let char of path) {
      movesN[char].map((move, idx) => {
          position[idx] += move
      })
      const key = position.join(",")
      console.log(positions)
      if (positions.has(key)) {
          return true
      }
      positions.add(key)
  }
  return false
};



// --------------------------- LOGS --------------------------- //

console.log(isPathCrossing("NESWW"))
console.log(isPathCrossing("NES"))
console.log(isPathCrossing("NESWW"))  

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1496-pathCrossing.ts