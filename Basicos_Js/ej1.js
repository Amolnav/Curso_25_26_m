// Primer ejercicio de JavaScript

// Variables

//Funciones
/**
 * Suma dos numeros y devuelve el resultado
 * @param {number} [a=0] Primer numero, valor por defecto 0
 * @param {number} [b=0] Segundo numero, valor por defecto 0
 * @returns {number} La suma de a y b
 */
function suma (a=0,b=0){
    return a+b;
}

// 1 numero aprobado o no
// 2.0 1 numero >= 9 sobresaliente 5-9 aprobado < 5
const aprobar1 = (num = 0) => num < 5 ? alert("Suspenso") : alert ("Aprobado")

const aprobar2 = (num = 0) => num < 5 ? alert("Suspenso") : num < 9 ? alert ("Aprobado") : alert("Sobresaliente")

aprobar1(2)
aprobar2(9 )