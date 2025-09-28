// funcion llamada mayusculas que pase a mayusculas todos los elementos del arrya que le pase como parametro
// funcion llamada precios con iva, al pasarle array de precios me los devuelve con el iva includio
// Crear una funcion llamada impares cuadrado donde me devuelva el cuadrado de los impares
// Crear una funcion normalizar email, que le pase un array de emails que pueden llevar espacion al principo o al final y quiero que me los devuelva sin espacions
// Crear una funcion llamada filtrar longitud que le pase por parametros nombres y un tamaño y me devuelva los nombres que son >= que el tamaño
// Normalizar nombres propios pasamos nombres y me los devuelva con la letra capital en mayuscula.


//Declaracion de arrays
const palabras = ["hola", "adios", "javascript", "react"];
const precios = [10, 25.5, 100, 7.99];
const numeros = [1, 2, 3, 4, 5, 10, 11, 15];
const emails = [
  "   mario.camposo@gmail.com  ",
  " ana.lopez@hotmail.com ",
  "   jose123@yahoo.es",
  "   laura@gmail.com       "
];
const nombres = ["Ana", "Catalina", "Luis", "Francisco", "Marta"];
const nombresPropios = [
  "antonio molina perez",
  "mArIo CaMpOsO",
  "luisa fernandez",
  "cARlos loPEz"
];

/**
 * @description Transforma las palabras a todo mayusculas
 * @param {string[]} a - Array con palabras 
 * @returns - Array de las palabras en todo mayusculas
 */
function mayusculas (a) {
  return a.map((palabra) => palabra.toUpperCase());
}
console.log(mayusculas(palabras));

/**
 * @description Aplica el iva a los precios pasados como parametro
 * @param {number[]} a - Array de precios
 * @returns - Array con el IVA aplicado a los precios
 */
function preciosIva (a) {
    return a.map((precios) => precios+(precios*0.21))
}
console.log(preciosIva(precios))

/**
 * @description Aplica el cuadrado a los numeros impares
 * @param {number[]} a - Array de numeros
 * @returns - Array con los numeros impares elevados al cuadrado
 */
function imparesCuadrado (a) {
    return a.filter(num => num % 2 !== 0).map(num => num * num); 
    }
console.log(imparesCuadrado(numeros))

/**
 * @description Elimina todos los espacios que haya antes y despues del email
 * @param {string []} a - Array de emails
 * @returns - Array con los emails normalizados
 */
function normalizarEmail(a) {
    return a.map(email => email.trim());
}
console.log(normalizarEmail(emails))

/**
 * @description Filtra los nombres cuya longitud sea mayor o igual a `n`
 * @param {number} n - Longitud mínima permitida
 * @param {string[]} a - Array de nombres
 * @returns {string[]} - Nombres que cumplen la condición
 */
function filtrarLongitud (n,a){
    return a.filter(a => a.length >= n )
}
console.log(filtrarLongitud(3,nombres))

/**
 * @description Capitaliza nombres y apellidos (primera letra en mayúscula, resto en minúscula)
 * @param {string[]} a - Array con nombres
 * @returns - Array con los nombres normalizados
 */
function normalizarNombres(a) {
    return a.map(nombre => 
        nombre.split(' ')
            .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
            .join(' ')
    );
}
console.log(normalizarNombres(nombresPropios))

