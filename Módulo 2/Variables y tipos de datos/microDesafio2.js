// Micro-desafio 2 - Aumento salarial

//Variables
let nombre = "Pepe";
let apellido = "Gómez";
let sueldoActual = 250000;

let porcentajeAumento = 20;
let calculoAumento = (sueldoActual * porcentajeAumento) / 100;
let nuevoSueldo = sueldoActual + calculoAumento;

// Mensaje en consola
console.log(`Hola, estimado Pepe Goméz \n En base a su sueldo actual: \n $${sueldoActual} \n Ha recibido un aumento del 20%: \n $${calculoAumento} \n y su nuevo sueldo es de: $${nuevoSueldo}` );