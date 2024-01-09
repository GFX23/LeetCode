// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------ 938. Range Sum of BST ------------------- //

/* Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

 

Example 1:


Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
Example 2:


Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23. */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the tree using DFS and add the values of the nodes that are in the range [low, high]
// Return the sum

// Time complexity: O(n)
// Space complexity: O(n)


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


    const rangeSumBST = (root: TreeNode | null, low: number, high: number): number => {
      let stack: (TreeNode | null)[] = [root];
      let sum = 0;
      while(stack.length !== 0){
          let currentNode = stack.pop();
          if (currentNode !== null && currentNode !== undefined){
              if (currentNode.val >= low && currentNode.val <= high) {
                  sum += currentNode.val;
              }
              if (currentNode.left !== null && currentNode.val > low) {
                  stack.push(currentNode.left);
              }
              if (currentNode.right !== null && currentNode.val < high) {
                  stack.push(currentNode.right);
              }
          }
      }
      return sum;
    };


// --------------------------- LOGS --------------------------- //

console.log(rangeSumBST([10,5,15,3,7,null,18], 7, 15))
console.log(rangeSumBST([10,5,15,3,7,13,18,1,null,6], 6, 10))
console.log(rangeSumBST([10,5,15,3,7,13,18,1,null,6], 1, 10))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 938-rangeSumOfBST.ts