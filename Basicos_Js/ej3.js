/*
Gestion bancaria Revolut
El ejercicio consisten en llevar un pequeño sistema bancario con js que permita:
- crear cuentas con titular y saldo
- depositar dinero en una cuenta
- retirar dinero en una cuenta ( siempre que haya suficiente saldo )
- cosultar el saldo de una cuenta
- transferir dinero entre 2 cuentas ( validando saldo )
- mantener un listado de cuentas y buscar cuentas por titular

Cuando creemos una cuenta se debe generar un numero de cuenta con una longuitud del IBAN.
*/

//<--------------Declarar variables-------------->
const cuentas = [];

//<--------------Crear un numero de cuenta-------------->
/**
 * Función que crea un número de cuenta de 24 dígitos
 * @returns {string} numeroCuenta - Numero de cuenta generado
 */
function crearNumeroCuenta() {
    let numeroCuenta = "";
    for (let i = 0; i < 24; i++) {
        numeroCuenta += Math.floor(Math.random() * 10);
    }
    return numeroCuenta;
}
//<--------------Crear Cuenta bancaria-------------->
/**
 * Función que crea una cuenta bancaria
 * @param {string} titular  - Nombre del titular de la cuenta
 * @param {number} saldo - Saldo inicial de la cuenta
 * @returns 
 */
function crearCuenta(titular, saldo){
    const cuenta = {
        titular: titular,
        numeroCuenta: crearNumeroCuenta(),
        saldo: saldo,
    }
    cuentas.push(cuenta);
    return cuenta;
}
//<--------------Depositar dinero en una cuenta-------------->
/**
 * Función que deposita dinero en una cuenta
 * @param {number} numeroCuenta - Numero de cuenta donde se va a depositar el dinero
 * @param {number} cantidad  - Cantidad de dinero a depositar
 * @returns 
 */
function depositarDinero(numeroCuenta, cantidad){
    for(const cuenta of cuentas){
        if(cuenta.numeroCuenta === numeroCuenta && cantidad > 0){
            cuenta.saldo += cantidad;
            return cuenta.saldo;
        }
    }
    return "Cuenta no encontrada o cantidad negativa";
}
//<--------------Retirar dinero en una cuenta-------------->
/**
 * Función que retira dinero de una cuenta
 * @param {number} numeroCuenta  - Numero de cuenta de donde se va a retirar el dinero
 * @param {number} cantidad - Cantidad de dinero a retirar
 * @returns 
 */
function retirarDinero(numeroCuenta, cantidad){
    for(const cuenta of cuentas){
        if(cuenta.numeroCuenta === numeroCuenta && cantidad > 0 && cuenta.saldo - cantidad >= 0){
            cuenta.saldo -= cantidad;
            return cuenta.saldo;
        }
    }
    return "Cuenta no encontrada, cantidad negativa o saldo insuficiente";
}

//<--------------Consultar el saldo de una cuenta-------------->
/**
 * Función que consulta el saldo de una cuenta
 * @param {number} numeroCuenta  - Numero de cuenta de la que se va a consultar el saldo
 * @returns 
 */
function consultarSaldo(numeroCuenta){
    for(const cuenta of cuentas){
        if(cuenta.numeroCuenta === numeroCuenta){
            return cuenta.saldo;
        }
    }
    return "Cuenta no encontrada";
}
//<--------------Transferir dinero entre distintas cuentas-------------->
/**
 * Función que transfiere dinero entre dos cuentas
 * @param {number} numeroCuentaOrigen - Numero de cuenta desde la que se va a transferir el dinero
 * @param {number} numeroCuentaDestino - Numero de cuenta a la que se va a transferir el dinero
 * @param {number} cantidad  - Cantidad de dinero a transferir
 * @returns 
 */
function transferirDinero(numeroCuentaOrigen, numeroCuentaDestino, cantidad){
    if(cantidad > 0){
        let cuentaOrigen = null;
        let cuentaDestino = null;
        for(const cuenta of cuentas){
            if(cuenta.numeroCuenta === numeroCuentaOrigen){
                cuentaOrigen = cuenta;
            }
            if(cuenta.numeroCuenta === numeroCuentaDestino){
                cuentaDestino = cuenta;
            }
        }
        if(cuentaOrigen && cuentaDestino && cuentaOrigen.saldo - cantidad >= 0){
            cuentaOrigen.saldo -= cantidad;
            cuentaDestino.saldo += cantidad;
            return "Transferencia realizada";
        }
        return "Error en la transferencia";
    }
    return "Cantidad negativa";
}
//<--------------Buscar cuenta por titular-------------->
/**
 * Función que busca una cuenta por su titular
 * @param {string} titular - Nombre del titular de la cuenta a buscar
 * @returns 
 */
function buscarCuentaPorTitular(titular){
    for(const cuenta of cuentas){
        if(cuenta.titular === titular){
            return cuenta;
        }
    }
    return "Cuenta no encontrada";
}
//<--------------Mostrar cuentas-------------->
/**
 *  Función que muestra todas las cuentas con su titular y número de cuenta
 * @returns  - Muestra todas las cuentas con su titular y número de cuenta
 */
function mostrarCuentas() {
    console.log("Listado de cuentas:");
    for (const cuenta of cuentas) {
        console.log(cuenta.titular, "----", cuenta.numeroCuenta);
    }
    return cuentas; 
}
module.exports = {
    crearCuenta,
    depositarDinero,
    retirarDinero,
    consultarSaldo,
    transferirDinero,
    buscarCuentaPorTitular,
    mostrarCuentas,
    cuentas
};
function test() {
    // Crear cuentas
    let cuenta1 = crearCuenta("Alex", 500);
    let cuenta2 = crearCuenta("Sara", 300);

    // Consultar saldo inicial
    console.log(`✅ Saldo inicial de Alex: ${consultarSaldo(cuenta1.numeroCuenta)}€`);

    // Depositar dinero
    depositarDinero(cuenta1.numeroCuenta, 200); 
    console.log(cuenta1.saldo === 700 ? "✅ Depósito correcto" : "❌ Depósito fallido");

    // Retirar dinero
    retirarDinero(cuenta1.numeroCuenta, 100);
    console.log(cuenta1.saldo === 600 ? "✅ Retiro correcto" : "❌ Retiro fallido");
    
    // Intentar retirar más de lo que hay
    retirarDinero(cuenta1.numeroCuenta, 1000000);
    console.log(cuenta1.saldo === 600 ? "✅ Retiro fallido correctamente (saldo insuficiente)" : "❌ Retiro fallido");

    // Transferencia exitosa
    transferirDinero(cuenta1.numeroCuenta, cuenta2.numeroCuenta, 200);
    console.log(cuenta1.saldo === 400 && cuenta2.saldo === 500 ? "✅ Transferencia correcta" : "❌ Transferencia fallida");
    
    // Transferencia fallida (saldo insuficiente)
    transferirDinero(cuenta1.numeroCuenta, cuenta2.numeroCuenta, 20000000);
    console.log(cuenta1.saldo === 400 && cuenta2.saldo === 500 ? "✅ Transferencia fallida correctamente" : "❌ Transferencia fallida");

    // Búsqueda por titular
    console.log(buscarCuentaPorTitular("Alex") !== "Cuenta no encontrada" ? "✅ Búsqueda por titular correcta" : "❌ Búsqueda por titular fallida");
    console.log(buscarCuentaPorTitular("NoExiste") === "Cuenta no encontrada" ? "✅ Búsqueda de titular inexistente correcta" : "❌ Búsqueda de titular inexistente fallida");
}

test();
