// part 1
// let isPassing = (grade) => {
//     return grade >= 70
// }

// let scores = [90, 58, 87, 61, 72, 98, 15]

// let passing = scores.filter(isPassing)

// console.log(passing)

// part 2

let scores = [90, 58, 87, 61, 72, 98, 15]

let passing = scores.filter(element => element >= 70)

console.log(passing)

const averages = [6, 15.7, 9, 18, 22.1, 9.2, 4];

const highlight = () => {
  return averages.filter(element => element >= 15)
};

let overcome = averages.filter(element => element >= 15)
console.log(overcome)