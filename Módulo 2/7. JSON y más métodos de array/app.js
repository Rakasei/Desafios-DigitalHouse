const {obtenerBicicletas} = require("./datosBici")

const dhBici = {

    bicicletas : obtenerBicicletas(),

    buscarBici: function(id) {
        
        const bicicletas = this.bicicletas.filter(bici => bici.id === id)
        return bicicletas.length > 0 ? bicicletas[0] : null
    },

    venderBici: function(id) {
           const bici = this.buscarBici(id);
        if (bici) {
            if (bici.vendida === "no") {
                bici.vendida = "si"
                return bici;
            } else {
                return "La bicicleta ya ha sido vendida."
            }
        } else {
            return "La bicicleta no está disponible ya sea porque no está en el JSON o ya se vendió."
        }
    },

    biciParaLaVenta: function() {
        return this.bicicletas.filter(bici => bici.vendida === "no")
      },
    
    totalDeVentas: function() {
        return this.bicicletas.filter(bici => bici.vendida === "si")
         
      }
}




console.log(dhBici.venderBici("3")); 
//console.log(dhBici.venderBici("biciInexistente")); 


