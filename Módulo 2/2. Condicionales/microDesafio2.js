// Micro-desafio 2 - Ajuste tarifario de energía eléctrica

// Variables
let pagoMes = 30000;
let consumoKWH = 400;

//Condicional
if (consumoKWH > 300){
    pagoMes += pagoMes * 20 / 100;
    console.log(`  Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, en base al ajuste tarifario \n(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%) \ncumplimos con informarle que se ha ajustado el total a pagar, que será de $${pagoMes}`);
};

