// Micro-desafio 2 - Tabla de multiplicar

let tablaDeMultiplicar = () => {

   console.log(`Tabla de multiplicar`);

    for (let multiplicando = 1; multiplicando <= 10 ; multiplicando++){
        console.log(`--------------------\nEsta es la tabla del ${multiplicando}\n--------------------`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${multiplicando} * ${i} = ${multiplicando * i}`);
        }}

    
}

tablaDeMultiplicar()