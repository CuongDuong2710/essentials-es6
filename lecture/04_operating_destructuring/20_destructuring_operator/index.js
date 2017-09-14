// part 1
// let c = [100, 200]
// let a = c[0]
// let b = c[1]
// console.log(a, b)

// part 2
// let c = [100, 200]
// let [a, b] = c
// console.log(a, b)

// let fellowship = ["Frodo", "Gandalf", "Aragorn"]
// let [hobbit, wizard, ranger] = fellowship
// console.log(hobbit, wizard, ranger)

// part 3
let c = [100, 200, 300, 400, 500]
let [a, ...b] = c
console.log(a, b) // a = 100, b = [200, 300, 400, 500]
