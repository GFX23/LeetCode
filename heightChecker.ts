// Desc.:A school is trying to take an annual photo of all the students. 
// The students are asked to stand in a single file line in non-decreasing order by height. 
// Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// Expl.:

const heightChecker = (heights: number[]): number => {
  let expected: number[] = [...heights].sort((a,b) => a-b)
  let counter = 0
  for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== expected[i]) {
          counter++
      }
  }
  console.log(counter)
  return counter
};

heightChecker([5,1,2,3,4])
heightChecker([1,1,4,2,1,3])
heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7])