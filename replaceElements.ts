// Desc.: Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.

// Expl.: Iterating through array, replacing every element by sliced arr except last element, which is set to -1.

const replaceElements = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length-1; i++) {
      arr[i] = Math.max(...arr.slice(i+1))
  }
  arr[arr.length-1] = -1
  return arr
};


console.log(replaceElements([17,18,5,4,6,1]))