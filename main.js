// EXERCICI 1

const add = (a, b) => a + b;


// EXERCICI 2

const randomNumber = () => Math.floor(Math.random() * 101);


// EXERCICI 3

class Person {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hola, ${this.name}`);
  }
}

const person1 = new Person("Arnau");
person1.greet();
