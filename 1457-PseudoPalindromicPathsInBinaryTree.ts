// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----- 1457. Pseudo-Palindromic Paths in a Binary Tree ------ //

/* Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome.

Return the number of pseudo-palindromic paths going from the root node to leaf nodes.

Example 1:

Input: root = [2,3,1,3,1,null,1]
Output: 2 
Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the red path [2,3,3], the green path [2,1,1], and the path [2,3,1]. Among these paths only red path and green path are pseudo-palindromic paths since the red path [2,3,3] can be rearranged in [3,2,3] (palindrome) and the green path [2,1,1] can be rearranged in [1,2,1] (palindrome).
Example 2:

Input: root = [2,1,1,1,3,null,null,null,null,null,1]
Output: 1 
Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the green path [2,1,1], the path [2,1,3,1], and the path [2,1]. Among these paths only the green path is pseudo-palindromic since [2,1,1] can be rearranged in [1,2,1] (palindrome).
Example 3:

Input: root = [9]
Output: 1 */

// ------------------------ SOLUTION -------------------------- //

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const pseudoPalindromicPaths = (root: TreeNode | null): number => {
  let amount = 0;
  
  const map = new Map<number, number>();
  
  for(let i = 1; i <= 9; i++) {
      map.set(i, 0);
  }
  
  const dfs = (currentNode) => {
      map.set(currentNode.val, map.get(currentNode.val) || 0 + 1);
      
      if(currentNode.left) {
          dfs(currentNode.left);
      }
      
      if(currentNode.right) {
          dfs(currentNode.right);
      }
      
      if(!currentNode.left && !currentNode.right) {
          let odd = 0;
          for(let i = 1; i <= 9; i++) {
              if(map.get(i) || 0 % 2 === 1) {
                  odd++;
              }
          }   
          
          if(odd < 2) {
              amount++;
          }
      }
      
      map.set(currentNode.val, map.get(currentNode.val) || 0 - 1);
  }
  
  dfs(root);
  
  return amount;
};


// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1457-PseudoPalindromicPathsInBinaryTree.ts