//Micro-desafio 1 - Facturación Cursos DH

let cursos = [
    ["html5", 4000],
    ["css3", 5000],
    ["javascript", 10000],
    ["react", 7000],
    ["nodejs", 15000]]

let cursosElegidos = [ "REACT", "NODEJS", "JAVASCRIP"]

let totalAPagar = (disponibles, elegidos) => {

    //Con un ciclo for pasamos a mayúsculas todos los nombres de los cursos, que estan en el indice 0 de cada array de curso
for(let i = 0; i < disponibles.length; i++){
    disponibles[i][0] = disponibles[i][0].toUpperCase()}

  // Declaramos la variable total
let total = 0

    // Con el primer condicional, iteramos sobre todos los cursos elegidos
for (let i = 0; i < elegidos.length; i++){
        //Con el segundo condicional anidado, cada curso elegido va a iterar con todos los cursos disponibles
        for(let t = 0; t < disponibles.length; t++){
            // Si el curso elegido matchea exactamente con el curso disponible...
            if(elegidos[i] === disponibles[t][0]){
                //...Se suma a la variable total, ese curso
                total += disponibles[t][1]
            }
        }
    }

//Cuando se llame a la función, retornara el total
return total

}

//Declaramos la funcion facturacion
let facturacion = (nombre, apellido, disponibles, elegidos, callback) => {

    //Con los datos del alumno incluidos en los parametros, se arma el mensaje 
    console.log(`Estimado ${nombre} ${apellido}, en función de los cursos seleccionados: `)
            // Se identan los cursos seleccionados 
                for(let i = 0; i < elegidos.length; i++){
                    console.log(`${i + 1}.- ${elegidos[i]}`)
                }
                // Se aplica el callback que indica el total a pagar
        console.log( `El monto total a pagar es de:${callback(disponibles,elegidos)}\n
                Bienvenido a la gran aventura Digital House`)
}

facturacion("Rodrigo", "Ruiz", cursos, cursosElegidos, totalAPagar)