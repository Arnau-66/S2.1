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
    // Rest en Destructuring:
    // Crea una array amb diversos elements.
    // Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.
    
    const array4 = [1, 2, 3, 4, 5];

    const [firstElement, secondElement, ...rest] = array4;

    console.log(`Tenint el array: [${array4}]: `)
    console.log('Primer element:', firstElement);
    console.log('Segon element:', secondElement);
    console.log('Resta dels elements:', rest);


// EXERCICI 5
    // Spread en Funcions:
    // Crea una funció que accepti tres arguments.
    // Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.








