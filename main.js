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
    // Ús de callbacks en funcions asíncrones:
    // Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback.
    // La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

    const esperarISaludar = (name, callback) => {
        setTimeout(() => {
                callback(name);
            }, 2000);
        };

    const callback2 = (name) => {
        console.log(`Hola, ${name}!`);
        };

    console.log(`Espera 3 segons: `);
    esperarISaludar('Arnau', callback2);


// EXERCICI 4
    // Callbacks amb arrays:
    // Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback.
    // La funció processarElements ha d'invocar la funció de callback per cada element de l'array.





