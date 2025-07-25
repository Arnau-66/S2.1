// EXERCICI 1 
    // Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma.
    // Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.

    const add = (a, b) => a + b;

    



// EXERCICI 2
    // Funció de fletxa sense paràmetres:
    // Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.

    const randomNumber = () => Math.floor(Math.random() * 101);
    const result = randomNumber();
    console.log(`Número aleatori: ${result}`);

// EXERCICI 3
    // Ús de 'this' en les funcions de fletxa:
    // Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa.
    // La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.

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
    // Funció de fletxa dins d'un loop:
    // Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.

    const printNumbers = (numbers) => {
        numbers.forEach(number => console.log(number));
        };
    
    console.log(`Print numbers: `);
    printNumbers([1, 2, 3, 4, 5]);

// EXERCICI 5
    // Funció de fletxa amb 'setTimeout':
    // Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.
    
    const delayedMessage = () => {
    setTimeout(() => {
        console.log("Missatge imprès després de 3 segons!");
    }, 3000);
    };

    console.log(`Espera 3 segons:`);
    delayedMessage();




