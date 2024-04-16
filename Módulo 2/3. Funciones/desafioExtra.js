//Desafio-extra 


// Convertir cadena de texto a mayúscula
let stringToMayus = (palabra) => {
    if (typeof palabra === "string")
        console.log(`El string "${palabra}" a mayúscula se escribe: ${palabra.toUpperCase()} `);
    else {
        console.log("Debes insertar una cadena de texto");
    }
}

stringToMayus();


// Mostrar tipo de dato ingresado
let tipoDeDato = (dato) => {
    if (dato !== undefined) {
        console.log(`El dato insertado es de tipo: ${typeof dato}`)
    }
    else {
        console.log(`Debes insertar un dato`);
    }
}


tipoDeDato()

// Convertidor de edad de perros a humanos
let calcularEdadPerruna = edad => {
    if (typeof edad === "number") {
        console.log(`La edad de tu perro en años humanos es de: ${edad * 7} `);
    } else {
        console.log("Debes insertar un número");
    }
}

calcularEdadPerruna(15)

// Calcular la ganancia por hora de trabajo
let gananciaPorHora = (horasPordia, diasPorMes, sueldoMensual) => {
 typeof horasPordia === "number" &&  typeof diasPorMes === "number" &&  typeof sueldoMensual === "number"?
    console.log(`La cantidad de ganancia por una hora de trabajo es de: \n ${sueldoMensual / (horasPordia * diasPorMes)} `): console.log("Debes ingresar respectivamente:\n La cantidad de horas trabajadas por dia, la cantidad de dias por mes y el salario mensual");
}

gananciaPorHora(8, 22, 90000)