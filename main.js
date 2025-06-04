// EXERCICI 1 
    // Operador ternari bàsic:
    // Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir.
    // Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.

    const potConduir = (edat) => {
    return edat >= 18 ? 'Pots conduir' : 'No pots conduir';
    };

    console.log(`Edat 20 anys: ${potConduir(20)}`);
    console.log(`Edat 20 anys: ${potConduir(16)}`); 

// EXERCICI 2
    // Ús amb operadors de comparació:
    // Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran.
    // Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

    let num1 = 10;
    let num2 = 5;

    let resultat = num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';

    console.log(`Quin número es el més gran?: ${resultat}`);


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




