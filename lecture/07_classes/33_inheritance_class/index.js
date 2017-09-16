import Entity from './entity'

class Hobbit extends Entity {
  constructor(name, height) {
    super(name, height)
  }

  // overide
  greet() {
    console.log(`Hello! I'm ${this.name} from the Shire!`)
  }
}

let Frodo = new Hobbit("Frodo", 4.5)
// console.log(Frodo)
Frodo.greet()