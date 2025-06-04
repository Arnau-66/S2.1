// EXERCICI 1 
    // Callback bàsic:
    // Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback.
    // La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

    const processar = (nombre, callback) => {
        callback(nombre);
        };

    const callback = (nombre) => {
        console.log(`El nombre és: ${nombre}`);
        };

    processar(42, callback);

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
    // Ús enllaçat d'operadors ternaris:
    // Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.
    // Operador ternari amb funcions:
    // Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

    let num = -5;

    let result3 = num > 0 ? 'positiu' : num < 0 ? 'negatiu' : 'zero';

    console.log(`El número (-5) es: ${result3}`);

    const trobarMaxim = (a, b, c) => {
            let maxAB = a > b ? a : b;
            let maxFinal = maxAB > c ? maxAB : c;
            return maxFinal;
        };

    console.log(`El valor maxim dels números (3, 8 i 5) es: ${trobarMaxim(3, 8, 5)}`);

// EXERCICI 4
    // Operador ternari dins un bucle:
    // Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array.
    // Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

    const parOImpar = (array) => {
        console.log(`Analitza els següents números: `);
        array.forEach(num => {
            let result4 = num % 2 === 0 ? 'parell' : 'senar';
            console.log(`${num} és ${result4}`);
        });
        };

    parOImpar([1, 2, 3,]);





