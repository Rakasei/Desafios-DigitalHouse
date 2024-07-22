const { log } = require("console")
const {obtenerBicicletas} = require("./datosBici")

const dhBici = {

    bicicletas : obtenerBicicletas(),

    buscarBici: function(id) {
        
        const bicicleta = this.bicicletas.filter(bici => bici.id === id)
        if(bicicleta){
            return bicicleta[0]
        } else {
            return null
        }
    },

    venderBici: function(id) {
           const bici = this.buscarBici(id);
        if (bici) {
            if (bici.vendida == "no") {
                bici.vendida = "si"
                
                return ("La bici " + bici.modelo + " a sido vendida con exito.")
            } else {
                return "La bicicleta "+ bici.modelo +" ya ha sido vendida."
            }
        } else {
            return "La bicicleta con id "+ id +" no está disponible en el JSON"
        }
    },

    biciParaLaVenta: function() {
        return this.bicicletas.filter(bici => bici.vendida === "no")
      },
    
    totalDeVentas: function() {
        return this.bicicletas.filter(bici => bici.vendida === "si")
        .reduce((total, bici) => total + bici.precio, 0);
         
      },

    aumentoBici: function(porcentaje) {
        console.log("Se actualizó el precio de todas las bicis, con un aumento del " + porcentaje + "%.");
        return this.bicicletas.map(bici => ({
            ...bici,
            precio: bici.precio + ((bici.precio * porcentaje) / 100)
        }))
    },

    biciPorRodado: function(rodado) {
        return this.bicicletas.filter(bici => bici.rodado === rodado)
    },

    listarTodasLasBicis: function() {
        return this.bicicletas
    }

}

// Función buscar bici

console.log("Buscar bici específica: "  )
console.log(dhBici.buscarBici(3));

// Función vender bici
console.log("* -------------------------------------------------------------------- *");

console.log("Vender una bicicleta: " + dhBici.venderBici(3)); 
console.log("Vender una bici ya vendida: " + dhBici.venderBici(2));
console.log("Vender una bicicleta inexistente: "+ dhBici.venderBici(99)) 

console.log("* -------------------------------------------------------------------- *");

// Función buscar bicis para la venta

console.log("Bicis en venta: ");
console.log(dhBici.biciParaLaVenta());

console.log("* -------------------------------------------------------------------- *");

// Función para determinar el total de ventas
console.log("Valor de todas las ventas realizadas: " + dhBici.totalDeVentas());

console.log("* -------------------------------------------------------------------- *");

//Función para aumentar el precio de las bicis

console.log(dhBici.aumentoBici(20));

console.log("* -------------------------------------------------------------------- *");

//Función para buscar bici por rodado

console.log(dhBici.biciPorRodado(26));

console.log("* -------------------------------------------------------------------- *");

//Listar todas las bicicletas
console.log("Listado de todas las bicicletas: ");
console.log(dhBici.listarTodasLasBicis());

