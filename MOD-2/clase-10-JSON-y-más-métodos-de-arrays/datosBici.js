const fs = require('fs')
const path = require('path')

function obtenerBicicletas() {
                                                                                                      
  const JSONbicicletas = path.join(__dirname,"bicicletas.json")
  const data = fs.readFileSync(JSONbicicletas, "utf8")
  const arrayBicicletas = JSON.parse(data)
  

  return arrayBicicletas
}


module.exports = {
  obtenerBicicletas
}