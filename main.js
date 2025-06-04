// EXERCICI 1 
    // Map: Teniu un array de números [1, 2, 3, 4].
    // Crea una nova array que contingui el quadrat de cada número.

    const array1 = [1, 2, 3, 4];
    const squareArray1 = array1.map(num => num * num);

    console.log(`Array inicial: `, array1);
    console.log('Array de quadrats: ', squareArray1);
    
// EXERCICI 2
    // Filter: Teniu una array de números [1, 2, 3, 4].
    // Crea una nova array que només contingui els números parells.

    const array2 = [1, 2, 3, 4];
    const evenArray2 = array2.filter(num => num % 2 === 0);

    console.log(`Array inicial: `, array2);
    console.log(`Array de números parells: ` , evenArray2);

// EXERCICI 3
    // Find: Teniu una array de números [1, 10 , 8, 11].
    // Utilitza la funció find per a trobar el primer número que és major a 10.

    const array3 = [1, 10, 8, 11];
    const numberBiggerThan10 = array3.find(num => num > 10);

    console.log(`Array inicial: `, array3);
    console.log('Primer número major que 10:', numberBiggerThan10);

// EXERCICI 4
    // Reduce: Teniu una array de números [13, 7, 8, 21].
    // Fes servir la funció reduce per a calcular la suma total dels números.

    const array4 = [13, 7, 8, 21];
    const totalArray = array4.reduce((count, num) => count + num, 0);

    console.log('Array inicial: ', array4);
    console.log('Suma total:', totalArray);

// EXERCICI 5
    // Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
    // - Filtra els nombres majors o iguals a 10.
    // - Multiplica cada nombre filtrat per 2.
    // - Calcula la suma dels nombres filtrats i multiplicats per 2.
    // - La funció ha de retornar el resultat de la suma.

    










