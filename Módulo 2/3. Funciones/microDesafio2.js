// Micro-desafio 2 - Local de venta de cómida rápida


let precioTotal = 0


let calculoPrecio = (tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla) => {

// Evaluamos el tipo de hamburguesa
    if (tipoDeHamburguesa === "carne a la parrilla") {
        precioTotal += 1800;
    } else if (tipoDeHamburguesa === "pollo") {
        precioTotal += 1500
    } else if (tipoDeHamburguesa === "vegetariana") {
        precioTotal += 1200
        jamon = false
    } else {
        //En caso de no ser válido, precioTotal cambia a -1
        precioTotal = -1;
    }

// Si costo de hamburguesa es distinto de -1, se procede a calcular el costo de los ingredientes
    if (precioTotal !== -1) {
        if (jamon === true) {
            precioTotal += 30
        }
        if (queso === true) {
            precioTotal += 25
        }
        if (salsaDeTomate === true) {
            precioTotal += 5
        }
        if (mayonesa === true) {
            precioTotal += 5
        }
        if (mostaza === true) {
            precioTotal += 5
        }
        if (tomate === true) {
            precioTotal += 15
        }
        if (lechuga === true) {
            precioTotal += 10
        }
        if (cebolla === true) {
            precioTotal += 10
        }
    }}

    // Creamos la funcion para enviar el mensaje al usuario
    let mensajeUsuario = (nombre, apellido, tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla, callback) => {
        callback(tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla)

        if (precioTotal !== -1) {
            console.log(`Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${precioTotal}`);

        } else {
            console.log(` Debe seleccionar un tipo de hamburguesa válido, las opciones son ( en minúscula ): \nCarne a la parrilla, pollo o vegetariana`);
        }
    }

    // Llamamos a la funcion con el callback de calculoPrecio
    mensajeUsuario("Daniel", "Fuentes", "pollo", true, true, true, true, true, true, true, true, calculoPrecio)


