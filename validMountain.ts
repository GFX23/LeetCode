// Description: Given an array of integers arr, return true if and only if it is a valid mountain array.
//
// Recall that arr is a mountain array if and only if:
//
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Expl.: First function check if array has valid length >= 3, after that, 
// if first two and last two elements of array meet inclining and declining requirement, 
// then iterating through array and if conditions are not met, returning false, otherwise returning true.



const validMountainArray = (arr: number[]): boolean => {
  if (arr.length < 3) {
    console.log("yes1");
    return false;
  }
  if (arr[0] < arr[1] && arr[arr.length - 1] < arr[arr.length - 2]) {
    let incline = true;
    for (let i = 0; i < arr.length; i++) {
      if (
        (arr[i] < arr[i + 1] && !incline) ||
        (arr[i] > arr[i + 1] && incline) ||
        arr[i] === arr[i + 1]
      ) {
        return false;
      }
      if (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2]) {
        incline = false;
      }
    }
    return true;
  }

  return false;
}

validMountainArray([2, 1]);
validMountainArray([3, 5, 5]);
validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
validMountainArray([0, 3, 2, 1]);
validMountainArray([1, 2, 3, 2, 1]);
