function validMountainArray(arr: number[]): boolean {
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
