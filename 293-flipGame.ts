// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 293 - FLIP GAME ------------------- //

/* You are playing a Flip Game with your friend.

You are given a string currentState that contains only '+' and '-'. You and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move, and therefore the other person will be the winner.

Return all possible states of the string currentState after one valid move. You may return the answer in any order. If there is no valid move, return an empty list [].

 

Example 1:

Input: currentState = "++++"
Output: ["--++","+--+","++--"]
Example 2:

Input: currentState = "+"
Output: [] */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the string and check if there are any consecutive "++" and if so, replace them with "--" and push the new string to the result array.
// Time complexity: O(n)
// Space complexity: O(n)

const generatePossibleNextMoves = (currentState: string): string[] => {
  const possibleMoves: string[] = [];
  const length = currentState.length;

  for (var i = 0; i < length - 1; i++) {
      if (currentState[i] === '+' && currentState[i + 1] === '+') {
          possibleMoves.push(currentState.slice(0, i) + '--' + currentState.slice(i + 2));
      }
  }

  return possibleMoves;
};


// --------------------------- LOGS --------------------------- //

console.log(generatePossibleNextMoves("++++"))
console.log(generatePossibleNextMoves("+"))
console.log(generatePossibleNextMoves("++"))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 293-flipGame.ts