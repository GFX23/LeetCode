// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 935 - KNIGHT DIALER -------------------- //

/* The chess knight has a unique movement, it may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an L). The possible movements of chess knight are shown in this diagaram:

A chess knight can move as indicated in the chess diagram below:


We have a chess knight and a phone pad as shown below, the knight can only stand on a numeric cell (i.e. blue cell).


Given an integer n, return how many distinct phone numbers of length n we can dial.

You are allowed to place the knight on any numeric cell initially and then you should perform n - 1 jumps to dial a number of length n. All jumps should be valid knight jumps.

As the answer may be very large, return the answer modulo 109 + 7.

 

Example 1:

Input: n = 1
Output: 10
Explanation: We need to dial a number of length 1, so placing the knight over any numeric cell of the 10 cells is sufficient.
Example 2:

Input: n = 2
Output: 20
Explanation: All the valid number we can dial are [04, 06, 16, 18, 27, 29, 34, 38, 40, 43, 49, 60, 61, 67, 72, 76, 81, 83, 92, 94]
Example 3:

Input: n = 3131
Output: 136006598
Explanation: Please take care of the mod. */

// ------------------------ SOLUTION -------------------------- //

// Setting up the map of possible moves
// Setting up the answer and mod
// For each number from 0 to 9
//     Create an array of length 10 and fill it with 0
//     Set the current number to 1
//     For each jump
//         Create an arrayBuffer of length 10 and fill it with 0
//         For each number from 0 to 9
//             For each possible jump from the current number
//                 Add the current number to the arrayBuffer
//         Set the array to the arrayBuffer
//     Add the array to the answer
// Return the answer

// Time complexity: 
// Space complexity: 

const knightDialer = (n: number): number => {
  const map: number[][] = [
    [4, 6],
    [6, 8],
    [7, 9],
    [4, 8],
    [0, 3, 9],
    [],
    [0, 1, 7],
    [2, 6],
    [1, 3],
    [2, 4],
  ];
  let answer = 0;
  let mod = 10 ** 9 + 7;
  for (let i = 0; i <= 9; i++) {
    let array: number[] = new Array(10).fill(0);
    array[i] = 1;
    for (let j = 1; j < n; j++) {
      let arrayBuffer: number[] = new Array(10).fill(0);
      for (let k = 0; k < array.length; k++) {
        map[k].forEach((elem) => {
          arrayBuffer[elem] = (arrayBuffer[elem] + array[k]) % mod;
        });
      }
      array = [...arrayBuffer];
    }

    for (let j = 0; j < array.length; j++) {
      answer = (answer + array[j]) % mod;
    }
  }
  return answer;
}



// --------------------------- LOGS --------------------------- //

console.log()
console.log()
console.log()

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 