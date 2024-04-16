// Desafio-extra 

// Diez numeros siguientes
let diezSiguientes = (num) => {
    let resultado = 0
    console.log(`--------------------\nMostrando los 10 números siguientes a ${num}:\n--------------------`);
    for (i = 1; i <= 10; i++) {
        resultado = num + i
        console.log(`El número siguiente de ${num} es ${resultado}`);
    }

}

diezSiguientes(2)


// Numeros del 1 al 57 saltando de 3 en 3
let imprimirNumeros = () => {
    console.log(`--------------------\nMostrando todos los numeros del 1 al 57 saltando de 3 en 3\n--------------------`);
    for (let i = 1; i <= 53; (i += 3)) {
        console.log(i);
    }
}

imprimirNumeros()


// Suma acumulativa del 0 al 100
let sumaAcumulativa = () => {
    let total = 0;
    console.log(`--------------------\nSumatoria de todos los números entre 0 y 100\n--------------------`);
    for (i = 0; i <= 100; i++) {
        total += i
    }
    console.log(total);
}

sumaAcumulativa()


// Letras en mayúscula del string introducido
let letrasEnMayuscula = (str) => {
    console.log(`--------------------\nTomar todas las letras del string e imprimirlas por consola en mayúscula\n--------------------`);
    for (let i = 0; i < str.length; i++) {
        console.log(str[i].toUpperCase());
    }
}

letrasEnMayuscula("practicando el uso de los ciclos o bucles")


// Numeros pares del array introducido
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let numerosPositivos = (array) => {
    let numerosPares = []
    for (let i = 1; i <= array.length; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i)
        }
    }

    console.log(`--------------------\nTodos los numeros pares del array introducido en el parámetro\n-------------------- `);
    console.log(numerosPares);
}


numerosPositivos(numeros)
