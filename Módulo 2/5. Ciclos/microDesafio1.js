//Micro-desafio 1 - Saldo bancario

let cuentaCliente = [1200, -800, 780, 1249, 5000, -100, -400, 7000, -6000]
let saldoPositivo = 0
let saldoNegativo = 0
let balance = 0

let calculoBalance = (cuenta) => {

    for (i = 0; i < cuenta.length; i++) {
        if (cuenta[i] > 0) {
            saldoPositivo += cuenta[i]
        } else {
            saldoNegativo += cuenta[i]
        }

        balance = saldoPositivo + saldoNegativo
        console.log(balance);

    }
    
}

let mensajeUsuario = (nombre, apellido, cuenta, callback) =>{
    callback(cuenta)
    
    console.log(`  Estimada/o ${nombre} ${apellido}. \n
    El monto total de los depósitos es de: $${saldoPositivo}\n
    El monto total de los retiros es de: $${saldoNegativo} \n
    Por lo tanto, su saldo actual en la cuenta es de: $${balance}.`);
}

mensajeUsuario("Rodrigo", "Ruiz", cuentaCliente, calculoBalance)


