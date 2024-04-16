//Micro-desafio 1 - alquiler de un vehículo

let costoAlquiler = 0
let costoPorDia = 0


let calcularCostoAlquiler = (tipoDeVehiculo, diasDeAlquiler, sillaparabebe) => {

    // Asignar el costo del día en base a el tipo de vehículo
    switch (tipoDeVehiculo) {

        case "compacto":
            costoPorDia += 14000;
            break;

        case "mediano":
            costoPorDia += 17000;
            break;

        case "camioneta":
            costoPorDia += 28000;
            break;

        default:
            return console.log(`Debe seleccionar un tipo de vehículo válido, las opciones son ( en minúscula ): \n compacto, mediano o camioneta`);
    }

    // En caso de que se haya solicitado una silla para bebe, el costo por día aumentara $1200
    sillaparabebe ? costoPorDia += 1200 : "";

    // Se calcula el costo del alquiler
    costoAlquiler = costoPorDia * diasDeAlquiler


    // Si se seleccionó mas de un día de alquiler, se procede con el mensaje
    if (diasDeAlquiler >= 1) {
        return console.log(` Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado, \nconsiderando los ${diasDeAlquiler} días utilizados, el monto total a pagar es de $${costoAlquiler}`);
    } else {
        return console.log("Debe seleccionar por lo menos un día de alquiler");
    }
}

// Llamada a la función
calcularCostoAlquiler("", 2, false)


