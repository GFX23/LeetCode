// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// -------------------- 2665 - COUNTER II --------------------- //

import { create } from "ts-node";

/* Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0 */

// ------------------------ SOLUTION -------------------------- //

// Setting up the function, which accepts an initial integer init
// and returns an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
// Time complexity: O(1)
// Space complexity: O(1)

type ReturnObj = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

const createCounter = (init: number): ReturnObj => {
  let temp = init
return {
      increment: () => ++temp,
      decrement: () => --temp,
      reset: () => temp = init
  }
};

// --------------------------- LOGS --------------------------- //

let counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())


// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 2665-counter.ts