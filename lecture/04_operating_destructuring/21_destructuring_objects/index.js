// part 1
// let wizard = { magical: true, power: 10 }
// let magical = wizard.magical
// let power = wizard.power
// let { magical, power } = wizard
// console.log(magical, power)

// part 2
let magical = true
let power = 2
let ranger = { magical: false, power: 9 }; // If not ';' -> Cannot read property 'magical' of undefined
// { magical, power } = ranger; // Syntax Error because this defines a coding block
// -->
({magical, power} = ranger); // valid
console.log(magical, power);