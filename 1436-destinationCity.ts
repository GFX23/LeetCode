// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ----------------- 1436 - DESTINATION CITY ------------------ //

/* You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 

Example 1:

Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo" 
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
Example 2:

Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are: 
"D" -> "B" -> "C" -> "A". 
"B" -> "C" -> "A". 
"C" -> "A". 
"A". 
Clearly the destination city is "A".
Example 3:

Input: paths = [["A","Z"]]
Output: "Z" */

// ------------------------ SOLUTION -------------------------- //

// Iterate through paths and add all the starting cities to a set
// Iterate through paths again and check if the destination city is in the set
// If not, return the destination city

// Time complexity: O(n)
// Space complexity: O(n)

const destCity = (paths: string[][]): string => {
  let destinations = new Set()

  for (let i = 0; i < paths.length; i++) {
      destinations.add(paths[i][0])
  }

  for (let i = 0; i < paths.length; i++) {
      if (!destinations.has(paths[i][1])) {
          return paths[i][1]
      }
  }

  return ""
};



// --------------------------- LOGS --------------------------- //

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))
console.log(destCity([["B","C"],["D","B"],["C","A"]]))
console.log(destCity([["A","Z"]]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1436-destinationCity.ts