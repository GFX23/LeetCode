// Desc.: Move all zeros in array to the end. Modify in-place.

// Expl.: Iterating through array, if 0 is found, splicing it from array and pushing to the end.

function moveZeroes(nums: number[]): void {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  console.log(nums);
}

moveZeroes([0,0,1]);
moveZeroes([0,1,0,3,12]);
moveZeroes([1,0,0]);
