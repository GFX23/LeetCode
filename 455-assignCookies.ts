// ---------------- LEETCODE TASK DESCRIPTION ----------------- //
// ------------------- 455 - ASSIGN COOKIES ------------------- //

/* Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

 

Example 1:

Input: g = [1,2,3], s = [1,1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.
Example 2:

Input: g = [1,2], s = [1,2,3]
Output: 2
Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
You have 3 cookies and their sizes are big enough to gratify all of the children, 
You need to output 2. */

// ------------------------ SOLUTION 1 -------------------------- //

// Modified "Two-Pointer approach" with shifting, overall it seems that this has better performace than classic two-pointer.
// Time complexity: O(n log n)
// Space complexity: O(log n)

const findContentChildren = (g: number[], s: number[]): number => {

  // Sorting arrays
  g.sort((a,b) => a-b)
  s.sort((a,b) => a-b)

  // setting result variable
  let childrenFed = 0

  // iteration until s.length is true (length 0 == undefined)
  while (s.length) {

    // we are comparing always 0 value, also in run-time its more readable
    if (s[0] >= g[0] ) {
      console.log("before shift",g,s)
      s.shift()
      g.shift()
      childrenFed++
      console.log("match",g,s)
    } else {
      s.shift()
      console.log("throwing cookie",g,s)
    } 
  }
  return childrenFed
  }

  // ------------------------ SOLUTION 2 -------------------------- //

// Classic two-pointer approach, with conditions
// Time complexity: O(n log n)
// Space complexity: O(log n)

const findContentChildren2 = (g: number[], s: number[]): number => {
  g.sort((a,b) => a-b)
  s.sort((a,b) => a-b)

  let gIndex = 0
  let sIndex = 0
  let childrenFed = 0
  while (s.length > sIndex && g.length > gIndex) {
    if (s[sIndex] >= g[gIndex] ) {
      console.log("before shift",g,s)
      sIndex++
      gIndex++
      childrenFed++
      console.log("match",g,s)
    } else {
      sIndex++
      console.log("throwing cookie",g,s)
    } 
  }
  return childrenFed
  }



// --------------------------- LOGS --------------------------- //

console.log(findContentChildren([1,2,3],[1,1])) // 1
console.log(findContentChildren([1,2],[1,2,3])) // 2
console.log(findContentChildren([1,2,2],[1,2,3])) // 3
console.log(findContentChildren([1,2,3],[3])) // 1
console.log(findContentChildren([10,9,8,7],[5,6,7,8])) // 2

// --------------------------- LOGS 2 ------------------------- //

console.log(findContentChildren2([1,2,3],[1,1])) // 1
console.log(findContentChildren2([1,2],[1,2,3])) // 2
console.log(findContentChildren2([1,2,2],[1,2,3])) // 3
console.log(findContentChildren2([1,2,3],[3])) // 1
console.log(findContentChildren2([10,9,8,7],[5,6,7,8])) // 2

// ----------------------- CLI COMMAND ------------------------ //

//run ts-node 455-assignCookies.ts