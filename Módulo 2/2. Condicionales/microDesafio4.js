// Micro-desafio 4 - Mi primera calculadora

// Variables
let num1 = 0;
let num2 = 0;
let operacion = "" // sumar, restar, multiplicar o dividir

// Condicional

switch (operacion) {

    case "sumar":
        console.log(  `El resultado de la suma de ${num1} y ${num2} da ${num1 + num2}.`);
        break;

    case "restar":
        console.log(  `El resultado de la resta de ${num1} y ${num2} da ${num1 + num2}.`);
        break;

    case "multiplicar":
        console.log(  `El resultado de la multiplicación de ${num1} y ${num2} da ${num1 + num2}.`);
        break;

    case "dividir":
        console.log(  `El resultado de la división de ${num1} y ${num2} da ${num1 + num2}.`);
        break;

    default:
        console.log("Las operaciones aceptadas son: sumar- restar- multiplicar- dividir");
}



