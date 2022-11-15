// Desc.: Given an integer numRows, return the first numRows of Pascal's triangle.
//In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//      [1]
//    [1][1]
//   [1][2][1]
//  [1][3][3][1]



// Expl.: Bellow


function generate(numRows: number): number[][] {
  let output = [[1]]

  // Creating forloop for "n-times" by numRows and initializing empty array
  for (let i = 0; i < numRows-1; i++) {
      let array: number[] = []
      // Creating forloop for current "n"
      for (let j = 0; j <= i+1 ; j++) {
          // First and last index is 1
          if (j === 0 || j === i+1) {
              array.push(1)
          // Every other index will be sum of two idx, above this one
          } else {
              array.push(output[i][j-1] + output[i][j])
          }

      }
      output.push(array)
  }
  return output
};


console.log(generate(5))
console.log(generate(8))
console.log(generate(3))
console.log(generate(20))