// Desc.: Given array of int, check if there exist two int i and j which:
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Expl.: Iterating through array, looking for number which will meet condition 
// num === arr[i] * 2 && idx !== i

const checkIfExist = (arr: number[]): boolean => {
  for (let i = 0; i < arr.length; i++) {
      if (arr.some((num, idx) => num === arr[i] * 2 && idx !== i )) {
          return true
      }
  }
  return false
};

console.log(checkIfExist([10,2,5,3]))
console.log(checkIfExist([0,0]))
console.log(checkIfExist([-2,0,10,-19,4,6,-8]))