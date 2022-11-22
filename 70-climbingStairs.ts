// Desc.: You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Expl.: If "n" is less then two, returning two because there is "n" ways to climb, 
// otherwise looping "n"-th times, while adding previous value to current, when "i" reach equality with "n", returning num.

const climbStairs = (n: number): number => {
  if (n <= 2) {
      return n
  }
  let one = 1
  let two = 2
  for(let i = 3; i <= n ; i++){
          let sum = one;
          one = two;
          two +=sum;
      }
      return two;
};


console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(12))