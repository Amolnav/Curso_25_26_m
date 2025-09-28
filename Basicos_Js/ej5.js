// .at -> acceso con indices negativos
const frutas = [0,1,2,3,4,5,6,7]
console.log(frutas.at(-2)) // 6
console.log(frutas.slice(-2)) // 6 7

//splice -> modifcar un array MUTA EL ARRAY
console.log(frutas.splice(1,2,1,2)) // extrae desde la posicion 1 2 items ( te los devuelve) >3 parametro añade al array lo que pongamos

//concat -> concatena arrays
const frutas2 = [8,9,10,11,12,13]
console.log(frutas.concat(frutas2))

//otra forma de concatenar
console.log(...frutas,...frutas2)

const pesos = [1,1,1,1,1,1,1,2,2,4,5,3,4]
const sinDups = [...new Set(pesos)]

// .reduce reducir un array a 1 unico valor
pesos.reduce( (suma,peso) => suma+peso , 0)

// Realizar la multiplicación de todo el array
pesos.reduce((multiplicar,peso)=>multiplicar*peso, 1);

// Encontrar el máximo de un array, y el mínimo
const minimo = frutas.reduce((menor, actual) => actual < menor ? actual : menor);
const maximo = frutas.reduce((maximo, actual) => actual > maximo ? actual : maximo);
console.log(minimo)
console.log(maximo)
// Dado un array que sea [1, 2, 3, 1, 1, 2, 4, 4], devolverme un objeto clave - valor que me diga nombre de la fruta: número de repeticiones
const claves = [1, 2, 3, 1, 1, 2, 4, 4];

const claveValor = claves.reduce((acc, clave) => {
    acc[clave] = (acc[clave] || 0) + 1; // Si no existe, empieza en 0 y suma 1
    return acc; // siempre hay que devolver el acumulador
}, {}); // valor inicial del acumulador es un objeto vacío


const usuarios = [
    {id: 1, nombre: "Ana", edad: 25, data: {books: 100}},
    {id: 2, nombre: "Luis", edad: 30, data: {books: 80}},
    {id: 3, nombre: "Marta", edad: 22, data: {books: 50}},
    {id: 4, nombre: "Carlos", edad: 28, data: {books: 0}}, 
    {id: 5, nombre: "Sofía", edad: 35, data: {books: 120}},
    {id: 6, nombre: "Pedro", edad: 27, data: {books: 70}},
    {id: 7, nombre: "Lucía", edad: 31, data: {books: 90}},
    {id: 8, nombre: "Javier", edad: 29, data: {books: 85}},
    {id: 9, nombre: "Isabel", edad: 24, data: {books: 10}},
    {id: 10, nombre: "Miguel", edad: 33, data: {books: 110}}
];

    //Info de Ana
    const infoAna = usuarios.find(usuario => usuario.nombre.toLowerCase() == "ana")
    console.log(infoAna)

    //Todos los usuarios cuya edad es superior a 28
    const usersMayores = usuarios.find(usuario => Number(usuario.edad) >= 28) ?? {}
    console.log(usersMayores)

    //devolver un array con solo los nombres de usuarios que tengan en su biblioteca mas de 20 libros
    const more20 = usuarios.filter(usuario => Number(usuario.data.books) > 20) ?? {}
    console.log(more20)

    //obtener el valor promedio total de todos los libros si suponemos un precio medio de 28€
    const totalLibros = usuarios.reduce((acc, usuario) => acc + usuario.data.books * 28, 0);
    console.log(totalLibros);
    //que usuarios no tienen libros
    const noBooks = usuarios.filter(usuario => Number(usuario.data.books) == 0) ?? {}
    console.log(noBooks)
    // Dado el sigueinte array bidimensional, se pide aplanar dicho array en un array.
    const usuariosBidimensional = [
    [
        {id: 1, nombre: "Ana", edad: 25, data: {books: 100}},
        {id: 2, nombre: "Luis", edad: 30, data: {books: 80}}
    ],
    [
        {id: 3, nombre: "Marta", edad: 22, data: {books: 50}},
        {id: 4, nombre: "Carlos", edad: 28, data: {books: 0}}
    ],
    [
        {id: 5, nombre: "Sofía", edad: 35, data: {books: 120}},
        {id: 6, nombre: "Pedro", edad: 27, data: {books: 70}}
    ]
    ];
    const usuariosAplanado = usuariosBidimensional.flat();
    console.log(usuariosAplanado)

    const productos = [
        { id: 1, nombre: 'Laptop', precio: 1200, stock: 5, categoria: 'Tecnología' },
        { id: 2, nombre: 'Camiseta', precio: 35, stock: 15, categoria: 'Ropa' },
        { id: 3, nombre: 'Monitor', precio: 300, stock: 0, categoria: 'Tecnología' },
        { id: 4, nombre: 'Libro', precio: 20, stock: 50, categoria: 'Literatura' },
        { id: 5, nombre: 'Móvil', precio: 800, stock: 10, categoria: 'Tecnología' },
        { id: 6, nombre: 'Pantalón', precio: 60, stock: 5, categoria: 'Ropa' },
    ];

// Se pide:
// 1.- Obtener un array con los nombres de todos los productos que están agotados.
const agotados = productos.filter(productos => Number(productos.stock == 0)) 
console.log(agotados)
// 2.- Calcular el valor total del inventario (precio * stock) de todos los productos.
const valorInventario = productos.reduce((acc,producto) =>acc + producto.stock*producto.precio, 0)
console.log(valorInventario,"$")
// 3.- Filtrar los productos que pertenecen a la categoría 'Tecnología' y tienen un precio mayor a 500.
const filtroProductos = productos.filter(producto => Number(producto.precio) > 500)
    .filter(producto => producto.categoria.toLowerCase() === "tecnología") 
console.log(filtroProductos)
// 4.- Crear un nuevo array de productos aplicando un descuento del 10% a todos los productos de la categoría 'Ropa'.
const productoDescuento = productos.map(producto => producto.categoria.toLowerCase() === 'ropa' 
    ? { ...producto, precio: producto.precio * 0.9 } 
    : producto
);
console.log(productoDescuento)