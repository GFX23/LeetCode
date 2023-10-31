// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 645 - SET MISMATCH --------------------- //

/* You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2] */

// ------------------------ SOLUTION -------------------------- //

// 
// Time complexity: O(n)
// Space complexity: O(1)

const findErrorNums = (nums: number[]): number[] => {
  nums.sort((a,b)=> a-b);
  const res = [-1, -1];
   for (let i =0; i< nums.length; i++){
       if (nums[i+1]  == nums[i]){
           res[0]= nums[i]
       }
   }
// find the missing number
   for (let i = nums.length; i>=1 ; i--){
       if (nums.indexOf(i) === -1){
           res[1] = i
       }
   }
   return res;
}




// --------------------------- LOGS --------------------------- //

console.log(findErrorNums([1,2,2,4]))
console.log(findErrorNums([1,1]) )
console.log(findErrorNums([1,2,3,4,4,6,7,8,9,10]) )

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 645-setMismatch.ts