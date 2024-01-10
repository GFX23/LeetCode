// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----------------- 872. Leaf-Similar Trees ------------------ //

/* Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.



For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 

Example 1:


Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true
Example 2:


Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false */

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

const leafSimilar = (root1: TreeNode, root2: TreeNode): boolean => {
  let arr1: number[] = [];
  let arr2: number[] = [];
  const getLeafVal = (root: TreeNode, secondRoot = false) => {
      if (root?.left) {
          secondRoot ? getLeafVal(root.left, true) : getLeafVal(root.left);
      } if (root?.right) {
          secondRoot ? getLeafVal(root.right, true) : getLeafVal(root.right);
      }
      if (!root.left && !root.right) {
          secondRoot ? arr1.push(root.val) : arr2.push(root.val)
      }
  }
  root1 && getLeafVal(root1);
  root2 && getLeafVal(root2, true);
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};


// --------------------------- LOGS --------------------------- //

console.log(leafSimilar([3,5,1,6,2,9,8,null,null,7,4], [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]))
console.log(leafSimilar([1,2,3], [1,3,2]))
console.log(leafSimilar([1,2], [2,2]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 872-leafSimilarTrees.ts