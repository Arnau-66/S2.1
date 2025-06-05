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

















