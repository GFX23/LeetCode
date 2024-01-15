// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// -------- 2225. Find Players With Zero or One Losses -------- //

/* You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.
 

Example 1:

Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
Output: [[1,2,10],[4,5,7,8]]
Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].
Example 2:

Input: matches = [[2,3],[1,3],[5,4],[6,4]]
Output: [[1,2,5,6],[]]
Explanation:
Players 1, 2, 5, and 6 have not lost any matches.
Players 3 and 4 each have lost two matches.
Thus, answer[0] = [1,2,5,6] and answer[1] = []. */

// ------------------------ SOLUTION -------------------------- //

// Iterate over matches and create a map of each player and their losses
// Iterate over the map and add the players with 0 losses to the first array in the result
// Add the players with 1 loss to the second array in the result
// Return result

// Time complexity: O(n log n)
// Space complexity: O(n)

const findWinners = (matches: number[][]): number[][] => {
  let position: Map<number, number> = new Map()
  let result: number[][] = [...new Array(2)]
  for (let i = 0; i < matches.length; i++) {
      let winner = position.get(matches[i][0])
      if (!winner) {
          position.set(matches[i][0], 0)
      }
      position.set(matches[i][1], (position.get(matches[i][1]) || 0) +1)
  }

  position = new Map([...position.entries()].sort((a,b) => a[0]-b[0]))

  for (let [key, value] of position) {
      if (value === 0) {
          result[0].push(key)
      } else if (value === 1) {
          result[1].push(key)
      }
  }
  return result
};


// --------------------------- LOGS --------------------------- //

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))
console.log(findWinners([[2,3],[1,3],[5,4],[6,4]]))
console.log(findWinners([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 2225-findPlayersWithZeroOrOneLosses.ts