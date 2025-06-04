// EXERCICI 1 
    // Operador Spread en Arrays: Crea dues arrays, array1 i array2.
    // Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

        
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];

    const array3 = [...array1, ...array2];

    console.log(`Array combinat: ${array3}`);


// EXERCICI 2
    // Operador Rest en Funcions:
    // Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

    
    const suma = (...args) => {
        let total = 0;
        args.forEach(num => {
                total += num;
            });
        return total;
        };

    console.log(`La suma de tots els elements de l'array es: ${suma(1, 2, 3, 4, 5)}`);


// EXERCICI 3
    // Copiant objectes amb Spread:
    // Crea un objecte 'objecte1'.
    // Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread.
    // Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

    const objecte1 = {
        name: 'Arnau',
        age: 25
        };

    const objecte2 = { ...objecte1 };

    objecte2.age = 37;

    console.log('Objecte 1:', objecte1);
    console.log('Objecte 2:', objecte2); 



// EXERCICI 4
    // Callbacks amb arrays:
    // Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback.
    // La funció processarElements ha d'invocar la funció de callback per cada element de l'array.
    
    const processarElements = (array, callback4) => {
            array.forEach(element => {
                callback4(element);
            });
        };

    let count = 1;

    const callback4= (element) => {
        console.log(`Element ${count}: ${element}`);
        count++;
        };

    console.log(`Llistat d'elements: `)
    processarElements([1, 2, 3, 4, 5], callback4);

// EXERCICI 5
    // Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback.
    // La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

    const processarCadena = (chain, callback5) => {
        let upperCaseChain = chain.toUpperCase();
        callback5(upperCaseChain);
        };

    const callback5 = (upperCaseChain) => {
        console.log(`La cadena transformada és: ${upperCaseChain}`);
        };

    console.log(`La cadena és: Hola món`);
    processarCadena('hola món', callback5);






