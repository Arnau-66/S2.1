// EXERCICI 1 
    // Creació d'una Promesa:
    // Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
                resolve('Hola, món');
            }, 2000);
        });

// EXERCICI 2
    // Utilització d'una Promesa:
    // Utilitza la promesa creada en l'exercici anterior.
    // Crea un .then que imprimeixi el resultat a la consola.
    
    promise1.then(result=> {
        console.log(`Resultat exercici 2: `);
        console.log(result);
        });

// EXERCICI 3
    // Promesa amb reject:
    // Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

    const checkWord = (input) => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (input === 'Hola') {
                            resolve(`Input correcte`);
                        } else {
                            reject(`Input incorrecte`);
                        }
                    }, 2000);
            });
        };

    checkWord('Hola')
    .then(result => console.log(`Hola: `, result));

    checkWord('Adeu')
    .catch(error => console.log(`Adeu: `, error));

// EXERCICI 4
    // Ús de async/await:
    // Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1
    // i que després imprimeixi aquest resultat a la consola.

    const printResult = async () => {
        const result = await promise1;
        console.log(`Resultat exercici 4: `, result);
        };

    printResult();

// EXERCICI 5
    // Gestió d'errors amb async/await:
    // Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

    const validMessage = `Hola, món`;
    const invalidMessage = `Adeu, món`;

    const checkInputs5 = (input) => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (input === validMessage) {
                        resolve('Input correcte');
                        } else {
                                reject('Input incorrecte');
                            }
                }, 2000);
        });
    };

    const checkPromise5 = async (input) => {
    try {
        const result = await checkInputs5(input);
        console.log('Hola, món: ', result);

    } catch (error) {
        console.log(`Adeu, món: `, error);
    }
    };

    checkPromise5(validMessage);
    checkPromise5(invalidMessage);

// EXERCICI 6
    // Promise.all:
    // Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament.
    // Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

    const promise6 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resultat de la promesa 1 (2 segons)`);
        }, 2000);
    });

  
    const promise7 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resultat de la promesa 2 (3 segons)`);
        }, 3000);
    });

    Promise.all([promise6, promise7])
        .then(resultats => {
            console.log(`Totes les promeses s\'han resolt: `);
            console.log(resultats);
        })
        .catch(error => {
            console.log(`Hi ha hagut un error: `, error);
        });












