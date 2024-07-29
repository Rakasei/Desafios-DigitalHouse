const { importar } = require('./collectibles')

const hotToys = importar("Hot Toys");
const bandai = importar("Bandai");
const starWars = importar("Star Wars");


const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];


const collectibles = {
    figuras: unifiedCollectibles,
    

    listFigures: function() {
        this.figuras.forEach(figura => {
            console.log(`Marca: ${figura.marca}, Nombre: ${figura.nombre}, Precio: $${figura.precio}, Stock: ${figura.stock}`);
        });
    },
    
    figuresByBrand: function(marca) {
        return this.figuras.filter(figura => figura.marca === marca)
    }
};



// Mostrar todas las figuras
console.log("-----------------------------------------------------------------------------------------------------------------------------------");
console.log("Todas las figuras:");
console.log("-----------------------------------------------------------------------------------------------------------------------------------");
collectibles.listFigures();



// Mostrar figuras por marca
console.log("-----------------------------------------------------------------------------------------------------------------------------------");
console.log("Figuras de Hot Toys:");
console.log("-----------------------------------------------------------------------------------------------------------------------------------");
console.log(collectibles.figuresByBrand('Hot Toys'));
console.log("-----------------------------------------------------------------------------------------------------------------------------------");
console.log("Figuras de Bandai:");
console.log("-----------------------------------------------------------------------------------------------------------------------------------");
console.log(collectibles.figuresByBrand('Bandai'));
console.log("-----------------------------------------------------------------------------------------------------------------------------------");
console.log("Figuras de Star Wars:");
console.log("-----------------------------------------------------------------------------------------------------------------------------------");
console.log(collectibles.figuresByBrand('Star Wars'));
