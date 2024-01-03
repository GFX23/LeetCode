// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----- 2391 - MINIMUM AMOUNT OF TIME TO COLLECT GARBAGE ----- //

/* You are given a 0-indexed array of strings garbage where garbage[i] represents the assortment of garbage at the ith house. garbage[i] consists only of the characters 'M', 'P' and 'G' representing one unit of metal, paper and glass garbage respectively. Picking up one unit of any type of garbage takes 1 minute.

You are also given a 0-indexed integer array travel where travel[i] is the number of minutes needed to go from house i to house i + 1.

There are three garbage trucks in the city, each responsible for picking up one type of garbage. Each garbage truck starts at house 0 and must visit each house in order; however, they do not need to visit every house.

Only one garbage truck may be used at any given moment. While one truck is driving or picking up garbage, the other two trucks cannot do anything.

Return the minimum number of minutes needed to pick up all the garbage.

 

Example 1:

Input: garbage = ["G","P","GP","GG"], travel = [2,4,3]
Output: 21
Explanation:
The paper garbage truck:
1. Travels from house 0 to house 1
2. Collects the paper garbage at house 1
3. Travels from house 1 to house 2
4. Collects the paper garbage at house 2
Altogether, it takes 8 minutes to pick up all the paper garbage.
The glass garbage truck:
1. Collects the glass garbage at house 0
2. Travels from house 0 to house 1
3. Travels from house 1 to house 2
4. Collects the glass garbage at house 2
5. Travels from house 2 to house 3
6. Collects the glass garbage at house 3
Altogether, it takes 13 minutes to pick up all the glass garbage.
Since there is no metal garbage, we do not need to consider the metal garbage truck.
Therefore, it takes a total of 8 + 13 = 21 minutes to collect all the garbage.
Example 2:

Input: garbage = ["MMM","PGM","GP"], travel = [3,10]
Output: 37
Explanation:
The metal garbage truck takes 7 minutes to pick up all the metal garbage.
The paper garbage truck takes 15 minutes to pick up all the paper garbage.
The glass garbage truck takes 15 minutes to pick up all the glass garbage.
It takes a total of 7 + 15 + 15 = 37 minutes to collect all the garbage.
 */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: 
// Space complexity: 

const garbageCollection = (garbage: string[], travel: number[]): number => {
  let types: Map<string, number> = new Map()
  let dist = 0
  for (let i = 0; i < garbage.length; i++) {
      let unique = new Set(garbage[i])

      for (let char of unique) {
              if (types.has(char)) {
                  types.set(char, i+1)
              } else {
                  types.set(char, i+1)
              }
          }
      }
  for (let [key, value] of types) {
      dist += travel.slice(0, value-1).reduce((acc, num) => acc + num, 0)
  }
  dist += garbage.join("").length
  return dist
};



// --------------------------- LOGS --------------------------- //

console.log(garbageCollection(["G","P","GP","GG"], [2,4,3]))
console.log(garbageCollection(["MMM","PGM","GP"], [3,10]))


// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 2391-minimumAmountOfTimeGarbage.ts