//Micro-desafio 1 - Electrodomésticos

let electrodomesticos = ["cafetera", "secador", "multiprocesadora", "heladera", "licuadora", "batidora"]


//Acceder de manera arbitraria a elementos del array

console.log(electrodomesticos[2]) //multiprocesadora
console.log(electrodomesticos[1]) //secador de pelo
console.log(electrodomesticos[4]) //licuadora

//Movemos el primer elemento del array al final

let primerElemento = electrodomesticos.shift()
electrodomesticos.push(primerElemento)

console.log(electrodomesticos);

// Agregar al final del array 2 nuevos productos
electrodomesticos.push("lavarropa", "tostadora")

console.log(electrodomesticos);

// Mostrar por consola la cantidad de elementos que contiene el array

console.log(electrodomesticos);

//let electrodomesticos = ["cafetera", "secador", "multiprocesadora", "heladera", "licuadora", "batidora"]


//Acceder de manera arbitraria a elementos del array

console.log(electrodomesticos[2]) //multiprocesadora
console.log(electrodomesticos[1]) //secador
console.log(electrodomesticos[4]) //licuadora

//Movemos el primer elemento del array al final

if(electrodomesticos.includes("tostadora")){
    console.log("Producto encontrado");
} else {
    console.log("El producto buscado no existe");
}

//Unificar todos los elementos del array separados por un espacio
console.log("array");
electrodomesticos = electrodomesticos.join(", ")
console.log(electrodomesticos);

//Determinar la cantidad de elementos que posee el nuevo string

console.log(electrodomesticos.length);

//Cambiar el nombre de algun producto del string
electrodomesticos = electrodomesticos.replace("licuadora", "lavaplatos")

console.log(electrodomesticos);

//Devolver un array con todos los elementos separados por coma

electrodomesticos = electrodomesticos.split(",")
console.log(electrodomesticos);
