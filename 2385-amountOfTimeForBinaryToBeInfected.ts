// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --- 2385. Amount of Time for Binary Tree to Be Infected ---- //

/* You are given the root of a binary tree with unique values, and an integer start. At minute 0, an infection starts from the node with value start.

Each minute, a node becomes infected if:

The node is currently uninfected.
The node is adjacent to an infected node.
Return the number of minutes needed for the entire tree to be infected.

 

Example 1:


Input: root = [1,5,3,null,4,10,6,9,2], start = 3
Output: 4
Explanation: The following nodes are infected during:
- Minute 0: Node 3
- Minute 1: Nodes 1, 10 and 6
- Minute 2: Node 5
- Minute 3: Node 4
- Minute 4: Nodes 9 and 2
It takes 4 minutes for the whole tree to be infected so we return 4.
Example 2:


Input: root = [1], start = 1
Output: 0
Explanation: At minute 0, the only node in the tree is infected so we return 0. */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 



  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

const amountOfTime = (root: TreeNode | null, start: number): number => {
  const [max, distToStart] = findMaxDistance(root, start)
  return max
};

const findMaxDistance = (cur: TreeNode | null, start: number): number[] => {
  if (cur === null) return [0]

  const [leftMax, leftDist] = findMaxDistance(cur.left, start)
  const [rightMax, rightDist] = findMaxDistance(cur.right, start)
  if (cur.val === start) {
      return [Math.max(leftMax, rightMax), 0]
  }
  if (leftDist === undefined && rightDist === undefined) {
      return [Math.max(leftMax, rightMax) + 1]
  }
  if (leftDist !== undefined) {
      return [Math.max(leftMax, rightMax + 1 + leftDist), leftDist+1]
  } else {
      return [Math.max(rightMax, leftMax + 1 + rightDist), rightDist+1]
  }
}


// --------------------------- LOGS --------------------------- //

console.log(amountOfTime(new TreeNode([1,5,3,null,4,10,6,9,2]), 3))


// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 2385-amountOfTimeForBinaryToBeInfected.ts