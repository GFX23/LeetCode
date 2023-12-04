// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// --------- 1266 - MINIMUM TIME VISITING ALL POINTS ---------- //

/* On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

You can move according to these rules:

In 1 second, you can either:
move vertically by one unit,
move horizontally by one unit, or
move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
You have to visit the points in the same order as they appear in the array.
You are allowed to pass through points that appear later in the order, but these do not count as visits.
 

Example 1:


Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds
Example 2:

Input: points = [[3,2],[-2,2]]
Output: 5 */

// ------------------------ SOLUTION -------------------------- //

// Determine the minimum number of moves to get from one point to another
// The minimum number of moves is the max of the absolute difference between the x and y coordinates
// The max of the two is the minimum number of moves
// The difference between the two is the number of diagonal moves
// The total number of moves is the sum of the two

// Time complexity: O(n)
// Space complexity: O(1)


const minTimeToVisitAllPoints = (points: number[][]): number => {
  let moves = 0
  for (let i = 0; i < points.length -1; i++) {
      let yC = Math.abs(points[i][0] - points[i+1][0])
      let xC = Math.abs(points[i][1] - points[i+1][1])
      moves += Math.min(yC, xC) + Math.abs(yC-xC)
  }
  return moves
};



// --------------------------- LOGS --------------------------- //

console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))
console.log(minTimeToVisitAllPoints([[3,2],[-2,2]]))  
console.log(minTimeToVisitAllPoints([[559,511],[932,618],[-623,-443],[431,91],[838,-127],[773,-917],[-500,-910],[830,-417],[-870,73],[-864,-600],[450,535],[-479,-370],[856,573],[-549,369],[529,-462],[-839,-856],[-515,-447],[652,197],[-83,345],[-69,423],[310,-737],[78,-201],[443,958],[-311,988],[-477,30],[-376,-153],[-272,451],[322,-125],[-114,-214],[495,33],[371,-533],[-393,-224],[-405,-633],[-693,297],[504,210],[-427,-231],[315,27],[991,322],[811,-746],[252,373],[-737,-867],[-137,130],[507,380],[100,-638],[-296,700],[341,671],[-944,982],[937,-440],[40,-929],[-334,60],[-722,-92],[-35,-852],[25,-495],[185,671],[149,-452]]))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 1266-minimumTimeVisitingAllPoints.ts