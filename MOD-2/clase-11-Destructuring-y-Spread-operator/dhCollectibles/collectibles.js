const fs = require('fs');
const path = require('path');


const importar = (marca) => {

    const datos = path.join(__dirname, "datos")
    const archivos = ["figuras1.json", "figuras2.json", "figuras3.json"]

    let figuras = [];

    archivos.forEach((archivo) => {
        const filePath = path.join(datos, archivo)
        const data = fs.readFileSync(filePath, 'utf-8')
        const figurasJson = JSON.parse(data)
        figuras = figuras.concat(figurasJson)
    })


    return figuras.filter(figura => figura.marca === marca)
};


module.exports = { importar }
