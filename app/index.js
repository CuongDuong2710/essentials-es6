// remove 'babel->preset->es2015 in package.json
// global all pars
this.a = 25

// part 1
// A print function creates its own (this.a) as seperate from the global base around.
// let print = function() {
//   console.log('this.a', this.a)
// }

// print() // Uncaught TypeError: Cannot read property 'a' of undefined

// part 2
// let print = function() {
//   this.a = 50;
//   console.log('this.a', this.a);
// }

// print(); // Uncaught TypeError: Cannot read property 'a' of undefined

// part 3
let arrowPrint = () => {
  console.log('this.a in arrowPrint', this.a) // this.a = 25
}

arrowPrint()

// part 4
// function outerFunction() {
//   this.a = 25;
//   let innerFunction = () => {
//     console.log(this); // does not create its own this
//   }
// }

// outerFunction() // Uncaught TypeError: Cannot read property 'a' of undefined



