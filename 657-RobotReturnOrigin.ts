// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// -------------- 657 - Robot Return to Origin ---------------- //

/* There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

 

Example 1:

Input: moves = "UD"
Output: true
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
Example 2:

Input: moves = "LL"
Output: false
Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves. */

// ------------------------ SOLUTION -------------------------- //

// Iterate through the string, keeping track of the x and y coordinates. 
// If the coordinates are 0,0 at the end, return true. Else, return false.
// Time complexity: 
// Space complexity: 

const judgeCircle = (moves: string): boolean => {
  let [x,y] = [0,0]
  for (let i = 0; i < moves.length; i++) {
      switch (moves[i]) {
          case "L":
              x += 1
              console.log("moved left", x)
              break
          case "R":
              x+= -1
              console.log("moved right", x)
              break
          case "U":
              y+= 1
              console.log("moved up", y)
              break
          case "D":
              y+= -1
              console.log("moved down", y)
              break
      }
  }
  return x == 0 && y == 0
};



// --------------------------- LOGS --------------------------- //

console.log(judgeCircle("UD"))
console.log(judgeCircle("LL"))
console.log(judgeCircle("RRDD"))

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 657-RobotReturnOrigin.ts