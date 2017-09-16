class Entity {
  //ES6 will throw a syntax error if a class has more than one constructor. 
  constructor(name, height) {
    this.name = name
    this.height = height
}
  
  greet() {
    console.log(`Hi! I'm ${this.name} from middle earth!`)
  }
}
  
let Merry = new Entity("Merry", 4.6)
Merry.greet()