// Desc.: Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.

// Expl.: Iterating through forloop with odd number, incrementing i by 2, and counting.., while i < x, returning counter.

const mySqrt = (x: number): number => {
  let counter = 0
  for (let i = 1; i <= x; i+=2) {
      x -= i
      counter++
  }
  return counter
};


console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(1548785))