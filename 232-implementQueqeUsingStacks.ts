// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- ### - ############## ------------------- //

/* Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false */

// ------------------------ SOLUTION -------------------------- //

// Create two stacks, input and output.
// Push elements into input stack.
// When pop or peek is called, check if output stack is empty.
// If it is, pop all elements from input stack and push into output stack.
// Return the top element of output stack.
// If output stack is not empty, return the top element.
//
// Time complexity: 
// Space complexity: 

class MyQueue {
  private input: number[];
  private output: number[];

  constructor() {
      this.input = [];
      this.output = [];
  }

  push(x: number): void {
      while (this.output.length > 0) {
          this.input.push(this.output.pop()!);
      }
      this.input.push(x);

      while (this.input.length > 0) {
          this.output.push(this.input.pop()!);
      }
  }

  pop(): number {
      return this.output.pop()!;
  }

  peek(): number {
      return this.output[this.output.length - 1];
  }

  empty(): boolean {
      return this.output.length === 0;
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/


// --------------------------- LOGS --------------------------- //

console.log()
console.log()
console.log()

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 232-implementQueqeUsingStacks.ts