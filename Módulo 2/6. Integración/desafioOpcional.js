//Desafio-opcional

//Encontrar número
let encontrarNumero = (array, numero) => {
    array.includes(numero) ? 
    console.log(`El número ${numero} existe en el array`) : 
    console.log(`El valor solicitado no existe`);
}

encontrarNumero([1,2,3,4,5,6], 3)


