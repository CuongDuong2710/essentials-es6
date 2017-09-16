const add = (x, y) => {
  return x + y
}

const multiply = (x, y) => {
  return x * y
}

// part 1
// export { add, multiply }

// part 2
export default multiply // if we want to have a single value represent a fallback or “main” value/function for a module

// part 3 - Unexpected token at 'const' or 'let' at same line
// export default const multiply = (x, y) => {
//   return x * y
// }