// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 621 - TASK SCHEDULER ------------------- //

/* You are given an array of CPU tasks, each represented by letters A to Z, and a cooling time, n. Each cycle or interval allows the completion of one task. Tasks can be completed in any order, but there's a constraint: identical tasks must be separated by at least n intervals due to cooling time.

​Return the minimum number of intervals required to complete all tasks.

 

Example 1:

Input: tasks = ["A","A","A","B","B","B"], n = 2

Output: 8

Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

After completing task A, you must wait two cycles before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.

Example 2:

Input: tasks = ["A","C","A","B","D","B"], n = 1

Output: 6

Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.

With a cooling interval of 1, you can repeat a task after just one other task.

Example 3:

Input: tasks = ["A","A","A", "B","B","B"], n = 3

Output: 10

Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.

There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

 */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 

function leastInterval(tasks: string[], n: number): number {
  const freq = Array(26).fill(0);
  for (const task of tasks) {
    freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }
  // Sort the frequency array in non-decreasing order
  freq.sort((a, b) => a - b);
  // Calculate the maximum frequency of any task
  const maxFreq = freq[25] - 1;
  // Calculate the number of idle slots that will be required
  let idleSlots = maxFreq * n;
  // Iterate over the frequency array from the second highest frequency to the lowest frequency
  for (let i = 24; i >= 0 && freq[i] > 0; i--) {
    // Subtract the minimum of the maximum frequency and the current frequency from the idle slots
    idleSlots -= Math.min(maxFreq, freq[i]);
  }
  // If there are any idle slots left, add them to the total number of tasks
  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
};


// --------------------------- LOGS --------------------------- //

console.log(leastInterval(["A","A","A","B","B","B"], 2)) // 8
console.log(leastInterval(["A","A","A","B","B","B"], 0)) // 6
console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)) // 16

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 621-taskScheduler.ts
