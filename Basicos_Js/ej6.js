/**
 * Generar un objeto resumen de mi array que tenga los siguientes campos:
 * valor: numero correspondiente
 * posicion: posicion dentro del array
 * esUltimo: array que me diga si es el ultimo
 * 
 */

const numeros = [1,2,3,4,5];

const resumenNumeros = numeros.map((num, index, myArray) => {
    return {
        valor : num,
        posicion : index,
        esUltimo : index === myArray.length-1
    };
})
console.log(resumenNumeros); // array de objetos mapeados a una estructura dada

/**
 * Estructura de datos que devuelva el siguente mapeado
 * nombre
 * precio original
 * precio IVA
 * hayStock
 */

const productos = [
    { name: "laptop", price: 1000, stock: 5, active: true },
    { name: "mouse", price: 25, stock: 0, active: true },
    { name: "teclado", price: 45, stock: 30, active: true },
    { name: "monitor", price: 200, stock: 10, active: true },
    { name: "auriculares", price: 60, stock: 20, active: true },
    { name: "tablet", price: 300, stock: 15, active: true },
    { name: "laptop ultrabook", price: 1200, stock: 8, active: true },
    { name: "laptop gamer", price: 1800, stock: 3, active: true },
    { name: "laptop básica", price: 700, stock: 12, active: true },
    { name: "laptop profesional", price: 1500, stock: 6, active: true },
    { name: "monitor 24'' Full HD", price: 150, stock: 20, active: true },
    { name: "monitor 27'' QHD", price: 300, stock: 10, active: true },
    { name: "monitor 32'' 4K", price: 500, stock: 5, active: true },
    { name: "monitor ultrawide 34''", price: 600, stock: 4, active: true },
    { name: "monitor gaming 27'' 165Hz", price: 400, stock: 7, active: true },
];

const mapaProductos = productos.map(producto => {
    return{
        name: producto.name,
        originalPrice: producto.price,
        priceVAT: +(producto.price * 1.21).toFixed(2),
        available: producto.stock > 0,
    };
})

console.log(mapaProductos) 

/**
 * Filtra los productos que tienen stock y estan activos
 */

const saProducts = productos.filter(producto => producto.stock > 0 && producto.active )
console.log(saProducts)

/**
 * Buscar todos los laptop en caseInsensitive
 */

const laptops = productos.filter(product => 
    product.name && product.name.toLocaleLowerCase().includes("laptop")
);

/**
 * @description Will search in the array all names that match with the `name` key (case-insensitive)
 * @param {Array} myArray2 // Array that will be used for searching in it, MUST HAVE AN `name` PROPIETY
 * @param {string} name // Name that will be used for searching a match
 * @returns {Array} An array with all the objects that match the name
 */
function productMapper(myArray2, name) {
    const search = String(name || '').toLowerCase();

    return myArray2.filter(item => 
        item.name && item.name.toLowerCase().includes(search)
    );
}
const ej = productMapper(productos, "Monitor")
console.log(ej)

/**
 * Funcion que le pase como parametro un array de productos, precio inicial, precio final
 * y devuelva los productos cuyo precio esta en ese rango sin incluir
 */

const filterPrices = (myArray3, firstPrice, lastPrice) => {
    return myArray3.filter(item => item.price > firstPrice && item.price < lastPrice)
}

const ej2 = filterPrices(productos,200,1200)
console.log(ej2)

// Modificar productMapper para que solo devuelva los availible 

function productMapper(myArray2, name) {
    const search = String(name || '').toLowerCase();

    return myArray2.filter(item => 
        item.name && item.name.toLowerCase().includes(search) && item.available
    );
}

//Le paso un carrito me retorna el precio
const carrito = [
    {
        name:"laptop",
        price:100,
        count:5,
        categoria: "Electronica"
    },
    {
        name:"Teclado Mecánico",
        price: 28.56,
        count:1,
        categoria: "Electronica",

    },
    {
        name: "Polo Scalper",
        price: 218.6,
        count: 10,
        categoria: "Ropa"
    },
    {
        name: "Pantalon Stradivarius",
        price: 150,
        count: 2,
        categoria: "Ropa"
    },
]

const carrito3 = [
]
/**
 * @description Calculates the total price of items in a cart, including VAT
 * @param {Object[]} carro // Array of objects, each object MUST have a `price` property
 * @param {number} vat // VAT multiplier to apply to each item's price, default is 1.21
 * @returns {number} The total price of all items in the cart including VAT
 */
const totalCarrito = (carro = [] ,vat = 1.21) => {
    return carro.reduce((acc, item) => { 
        return acc + item.price*vat
    }, 0)
}
console.log(totalCarrito(carrito3))

// Agrupa el carrito por categorias
/**
 * {
 * Electronica [
 * ]
 * 
 * }
 */

const agrupador = ((carro = []) => 
    carro.reduce((acc, item) => {
        const cat = item.categoria;
        if(!acc[cat]) {
            acc[cat] = []
        }
        acc[cat].push(item)
        return acc;
    }, {})
) 
console.log(agrupador(carrito))
//Contar votos
const usuarios = [
    "Ana", "Carlos", "Luis", "Marta", "Ana", "Pedro", "Lucía", "Carlos",
    "Ana", "Marta", "Juan", "Pedro", "Lucía", "Luis", "Carlos", "Ana",
    "Marta", "Lucía", "Pedro", "Juan", "Ana", "Luis", "Carlos", "Lucía",
    "Marta", "Ana", "Juan", "Pedro", "Carlos", "Lucía", "Luis", "Ana"
];
const contadorVotos = (votados) => votados.reduce((acc, nombre) => {
        acc[nombre] ? acc[nombre]++ : acc[nombre] = 1;
        return acc;
    }, {});

console.log(contadorVotos(usuarios))


// buscar el user cuyo id sea 2 y obtener el rol

const usuarios2 = [
    { id: 1, nombre: "Ana", rol: "admin" },
    { id: 2, nombre: "Luis", rol: "editor" },
    { id: 3, nombre: "Marta", rol: "viewer" },
    { id: 4, nombre: "Carlos", rol: "moderador" },
    { id: 5, nombre: "Sofía", rol: "editor" },
    { id: 6, nombre: "Pedro", rol: "viewer" },
    { id: 7, nombre: "Lucía", rol: "admin" },
    { id: 8, nombre: "Andrés", rol: "soporte" },
    { id: 9, nombre: "Elena", rol: "viewer" },
    { id: 10, nombre: "Javier", rol: "moderador" }
];
const usuarioFinder = (userArray, id = 1) => (userArray.find(user => user.id === Number(id)))?.rol ?? "User no encontrado";
console.log(usuarioFinder(usuarios2))

const indexFinder = (userArray, id = 1) => {
    return user.findIndex(user => Number(user.id) === Number(id));
}

const pares = [1,2,3,4,5,6,7,8]

const hayPares = (arrayNums) => (
    arrayNums.some(num => num % 2 === 0)
)
