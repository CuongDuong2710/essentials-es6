let a = 'hello'

console.log(a)

// standalone block of code because it's not bound to class or a function
// Remember that with scoping we can re-use the same variable name.
{
  let a = 'goodbye'
  console.log('a inside log', a)
}

// so the scope is protecting variable 'salary' for anything want to use it
// private information
{
  let salary = 9000
}

// error 'salary is not defined'
console.log(salary)