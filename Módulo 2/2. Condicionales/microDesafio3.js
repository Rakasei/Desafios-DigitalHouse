// Micro-desafio 3 - Traductor condicional

// Variables 
let palabraIngresada = ""; // perro, gato, puerta, ventana o mesa
let palabraTraducida = "";

console.log("¡Bienvenid@ al traductor!");

// Condicional
switch(palabraIngresada){
    case "perro":
        palabraTraducida = "Dog";
    break;

    case "gato":
        palabraTraducida = "Cat";
    break;

    case "puerta":
        palabraTraducida = "Door";
    break;

    case "ventana":
        palabraTraducida = "Window";
    break;

    case "mesa":
        palabraTraducida = "Table";
    break;
}

// Mensaje en consola
let mensaje = palabraTraducida === "" ? `La palabra ingresada es incorrecta` : `La palabra ${palabraIngresada} traducida es ${palabraTraducida}` ;

console.log(mensaje);