//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
    { nombre: "Mochila", precio: 30, categoria: "Ropa" },
    { nombre: "Auriculares", precio: 90, categoria: "Electrónica" },
    { nombre: "Tablet", precio: 250, categoria: "Electrónica" },
    { nombre: "Reloj", precio: 75, categoria: "Accesorios" },
    { nombre: "Silla", precio: 120, categoria: "Muebles" },
];

// filter() para obtener los productos que cuesten menos de 100
const productosMenosDe100 = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a $100:");
console.log(productosMenosDe100);

// sort() para ordenar esos productos alfabéticamente por su nombre
const productosOrdenados = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("\nProductos ordenados alfabéticamente:");
console.log(productosOrdenados);

// map() para generar un nuevo arreglo que contenga solo los nombres de los productos
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("\nNombres de los productos:");
console.log(nombresProductos);

// every() para verificar si ningún producto está repetido
const noHayRepetidos = productos.every((producto, index, self) => {
    return self.findIndex(p => p.nombre === producto.nombre) === index;
});

console.log(noHayRepetidos);

if(noHayRepetidos){ // true si no hay repetidos 
    console.log("No hay productos repetidos");
}
else{ // false si hay repetidos
    console.log("Hay productos repetidos");
}