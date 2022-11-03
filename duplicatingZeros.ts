// Given array of number, duplicate every zero you will find.
// Length should remain the same.

// Expl. Iterating through array with for loop, when i encounter "zero", i will splice array in current idx+1, insert one zero and poping last element for maintaining length of array

const duplicateZeros = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      arr.pop();
      i++;
    }
  }
};
