// Description: Remove all occurences if given element from array.

// Expl.: Iterating through array, while removed element is found, removing him from array through .splice, decresing counter by one.

const removeElement = (nums: number[], val: number): number => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
        i--
    }
  }
  console.log(nums);
  return nums.length;
}

removeElement([3,2,2,3],3)
removeElement([0,1,2,2,3,0,4,2],2)