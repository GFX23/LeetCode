// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------ 513 - Find bottom left tree value ------------- //

/* Given the root of a binary tree, return the leftmost value in the last row of the tree.

 

Example 1:


Input: root = [2,1,3]
Output: 1
Example 2:


Input: root = [1,2,3,4,null,5,6,null,null,7]
Output: 7 */

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

function findBottomLeftValue(root: TreeNode): number {
  const nodes: TreeNode[] = [root];

  let leftMostNodeVal = 0;
  while (nodes.length) {
      const node = nodes.shift()!;
      leftMostNodeVal = node.val;

      if (node.right) {
          nodes.push(node.right);
      }
      if (node.left) {
          nodes.push(node.left);
      }
  }

  return leftMostNodeVal;
}


// --------------------------- LOGS --------------------------- //

console.log(findBottomLeftValue(new TreeNode(2, new TreeNode(1), new TreeNode(3)))) // 1
console.log(findBottomLeftValue(new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3, new TreeNode(5), new TreeNode(6, null, new TreeNode(7)))))) // 7
console.log(findBottomLeftValue(new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3, new TreeNode(5), new TreeNode(6, null, new TreeNode(7)))))) // 4

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 513-findBottonLeftTreeValue.ts