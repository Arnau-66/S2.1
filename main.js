// EXERCICI 1 
    // Operador Spread en Arrays: Crea dues arrays, array1 i array2.
    // Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

        
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];

    const array3 = [...array1, ...array2];

    console.log('Array combinat:', array3);


// EXERCICI 2
    // Callbacks amb operacions matemàtiques:
    // Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback.
    // La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres.
    // Després, crida calculadora amb una funció que faci la suma dels dos nombres.

    const calculadora = (nombre1, nombre2, callback) => {
        return callback(nombre1, nombre2);
        };

    const sumar = (a, b) => a + b;

    let result2 = calculadora(15, 27, sumar);
    console.log(`La suma és: ${result2}`);

// EXERCICI 3
    // Ús de callbacks en funcions asíncrones:
    // Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback.
    // La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

    const esperarISaludar = (name, callback) => {
        setTimeout(() => {
                callback2(name);
            }, 2000);
        };

    const callback2 = (name) => {
        console.log(`Missatge després de 2 segons: Hola, ${name}!`);
        };

    esperarISaludar('Arnau', callback2);


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






