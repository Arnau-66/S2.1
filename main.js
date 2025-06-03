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

// EXERCICI 4

const printNumbers = (numbers) => {
  numbers.forEach(number => console.log(number));
};


printNumbers([1, 2, 3, 4, 5]);

// EXERCICI 5

const delayedMessage = () => {
  setTimeout(() => {
    console.log("Missatge imprès després de 3 segons!");
  }, 3000);
};


delayedMessage();


