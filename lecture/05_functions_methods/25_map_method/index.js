let points = [10, 20, 30]

// part 1
// let addOne = function(element) {
//   return element + 1
// }

// // reset 'points' to itself and going to map addOne on each element in the array
// // In this case, the function 'addOne' pass as an argument to map is called a callback precisely
// // because we call it on every element in our initial array
// points = points.map(addOne)

// console.log(points)

// part 2 - callback functions changed to arrow function
// let addOne = (element) => {
//   return element + 1
// }

// points = points.map(addOne)

// console.log(points)

// part 3 - do not declare 'addOne' function
points = points.map(element => {
  return element + 1
})
  
console.log(points)

// part 4 - shoter than
points = points.map(element => element + 1)
    
console.log(points)

// exercise
let lengths = [3, 7, 5];
let multiple = 8;

const scale = (multiple) => {
  return lengths.map(element => element * multiple);
};