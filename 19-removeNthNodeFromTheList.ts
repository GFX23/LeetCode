// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----------- 19. Remove Nth Node From End of List------------ //

/* Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1] */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let length = findLength(head);
  let i = 0,
      traverseTill = length - n - 1;
  if (traverseTill === -1) return head.next;
  let curr = head;
  while (i < traverseTill) {
      curr = curr.next;
      i++;
  }
  curr.next = curr.next.next;
  return head;

  function findLength(head: ListNode | null): number {
      let count = 0;
      if (head === null) return count;
      let curr = head;
      while (curr !== null) {
          count++;
          curr = curr.next;
      }
      return count;
  }
}


// --------------------------- LOGS --------------------------- //

console.log(removeNthFromEnd([1,2,3,4,5], 2)) // [1,2,3,5]
console.log(removeNthFromEnd([1], 1)) // [] 
console.log(removeNthFromEnd([1,2], 1)) // [1]  

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 19-removeNthNodeFromTheList.ts