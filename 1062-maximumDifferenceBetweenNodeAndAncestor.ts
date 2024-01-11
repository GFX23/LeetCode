// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ---- 1026. Maximum Difference Between Node and Ancestor ---- //

/* Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

 

Example 1:


Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.
Example 2:


Input: root = [1,null,2,null,0,3]
Output: 3 */

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


const maxAncestorDiff = (root: TreeNode | null): number => {
  let diff = -Infinity;

  const traverse = (node: TreeNode | null, max: number, min: number): void => {
      if (!node) {
          const newDiff = max - min;
          
          if (diff < newDiff) diff = newDiff;
          
          return;
      }

      const { val, left, right } = node;

      if (val > max) max = val;

      if (val < min) min = val;

      traverse(left, max, min);
      traverse(right, max, min);
  }

  const { val } = root;
  traverse(root, val, val);

  return diff;
}


// --------------------------- LOGS --------------------------- //

console.log(maxAncestorDiff(new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6, new TreeNode(4), new TreeNode(7)))), 7))
console.log(maxAncestorDiff(new TreeNode(1, null, new TreeNode(2, null, new TreeNode(0, new TreeNode(3))))))
console.log(maxAncestorDiff(new TreeNode(1, new TreeNode(2, new TreeNode(0, new TreeNode(3))))))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1062-maximumDifferenceBetweenNodeAndAncestor.ts