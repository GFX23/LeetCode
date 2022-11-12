// Desc.: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Expl.: Iterating through string array, while encounter (,[,{ pushing them into stack, when encounter ),],} it should be in last pos in stack, in the end, if stack is empty,
// returning true, otherwise false.

const isValid = (s: string): boolean => {
  let stringArr: string[] = s.split("")
  let stack: string[] = []
  for (let i =0; i < stringArr.length; i++) {
      if (stringArr[i] === "{" || stringArr[i] === "(" || stringArr[i] === "[" ) {
          stack.push(stringArr[i])
      }
      if (stringArr[i] === "}" && stack.pop() !== "{") {
          return false
      }
      if (stringArr[i] === "]" && stack.pop() !== "[") {
          return false
      }
      if (stringArr[i] === ")" && stack.pop() !== "(") {
          return false
      }
  }
  if (stack.length > 0) {
      return false
  } else {
      return true
  }
};


console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))