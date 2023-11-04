// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 682 - Baseball Game -------------------- //

/* You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid. */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the array, and keep a record of the scores.
// If the element is a number, push it to the record.
// If the element is "+", push the sum of the last two elements to the record.
// If the element is "D", push the double of the last element to the record.
// If the element is "C", remove the last element from the record.
// Return the sum of the record.

// Time complexity: O(n)
// Space complexity: O(n)

const calPoints = (op: string[]): number => {
  let record: number[] = []
  for (let i = 0; i < op.length; i++) {
      if (parseInt(op[i])) {
          record.push(parseInt(op[i]))
      }
      if (op[i] === "+") {
          record.push(record[record.length-1] + record[record.length-2])
      }
      if (op[i] === "D") {
          record.push(record[record.length-1]*2)
      }
      if (op[i] === "C") {
          record.pop()
      }
  }
  return record.reduce((acc, sum) => acc + sum, 0)
};

// --------------------------- LOGS --------------------------- //

console.log(calPoints(["5","2","C","D","+"]))
console.log(calPoints(["5","-2","4","C","D","9","+","+"]))
console.log(calPoints(["1"]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 682-baseballGame.ts