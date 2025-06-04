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
    // Ús amb operadors de comparació:
    // Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran.
    // Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

    let num1 = 10;
    let num2 = 5;

    let result2 = num1 > num2 ? `num1 (${num1}) és més gran que num2 (${num2})` : `num2 (${num2}) és més gran que num1 (${num1})`;

    console.log(`Quin número es el més gran?: ${result2}`);


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





