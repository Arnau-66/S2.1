// EXERCICI 1 
    // forEach: Teniu una array de noms.
    // Utilitza forEach per a imprimir cada nom a la consola:
    // let noms = ['Anna', 'Bernat', 'Clara'];

    let noms = ['Anna', 'Bernat', 'Clara'];

    console.log(`Array inicial: `, noms);
    console.log(`For Each: `);
    noms.forEach(nom => {
        console.log(nom);
        });

// EXERCICI 2
    // for-of: Teniu una array de noms.
    // Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

    let array2 = ['Anna', 'Bernat', 'Clara'];

    console.log(`Array inicial: `, array2);
    for (let name of array2) {
        console.log(name);
        }

// EXERCICI 3
    // filter: Teniu una array de números.
    // Utilitza filter per a crear una nova array que només contingui els números parells.
    // let numeros = [1, 2, 3, 4, 5, 6];

    let numeros = [1, 2, 3, 4, 5, 6];

    let evenNumbers = numeros.filter(num => num % 2 === 0);

    console.log(`Array incial: `, numeros);
    console.log('Números parells:', evenNumbers);

// EXERCICI 4
    // for-in: Teniu un objecte amb parells clau-valor:
    // let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' };
    // Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

    let obj = {
        nom: 'Ona',
        edat: 25,
        ciutat: 'Barcelona'
        };


    console.log(`Objecte inicial: `, obj);
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
        }

// EXERCICI 5
    // for-of amb break: Teniu una array de números.
    // Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle:
    // let numeros = [1, 2, 3, 4, 5, 6];














