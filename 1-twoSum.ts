// Desc.: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Expl.: Iterating through sorted array, while idx === idx+1, returning true, else false

const twoSum = (nums: number[], target: number): number[] | void => {

  // nested for loop solution
  for (let i = 0; i < nums.length; i++) {

    // j = i+1 because we already checked number before i
    for (let j = i + 1; j < nums.length; j++) {
      // returning match
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
};

//  ------------- better solution with O(n) ------------- 

interface MapProps {
  [key: number]: number
}

const twoSum2 = (nums: number[], target: number): number[] | void => {


  // 
  const map:MapProps = {};
  for (let i = 0; i < nums.length; i++) {
    const missingNum: number = target - nums[i];

    if (map.hasOwnProperty(missingNum)) {
      return [map[missingNum], i];
    }

    // handle the case when current num is 0
    if (nums[i] === 0 && map[missingNum] !== undefined) {
      return [map[missingNum], i];
    }
    map[nums[i]] = i;
  }
};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

console.log("SECOND VERSION")

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));
console.log(twoSum2([3, 3], 6));

// run ts-node 1-twoSum.ts
