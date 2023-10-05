/* Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

 

Example 1:

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
Example 2:

Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer. */

const isPerfectSquare = (num: number): boolean => {

  // covering 1 case (which when divided by three is not right)
  if (num === 1) {
    return true;
  }

  // iterating through possible numbers and looking for square
  for (let i = 0; i < num / 3; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(144));

//run ts-node 367-validPerfectSquare.ts
