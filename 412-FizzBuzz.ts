// Desc.: Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Expl.: Creating array, for "n", if condition is met, returning string, else returning number.

const fizzBuzz = (n: number): string[] => {
  let answer: string[] = []
  for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          answer.push("FizzBuzz")
      } else if (i % 3 === 0) {
          answer.push("Fizz")
      } else if (i % 5 === 0) {
          answer.push("Buzz")
      } else {
          answer.push(String(i))
      }
  }
  return answer
};


console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))
