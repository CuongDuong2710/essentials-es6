// 'const' value cannot be re-assigned
const b = 3
b = 3*4; // 'b' is read-only

const array = [1, 2, 3]
array.push(4)
console.log(array)

array = [1] // error: "array" is read-only