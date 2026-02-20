// Carrito de Compras (Suma Total)
// Convertir un arreglo de precios en un solo numero total.


const productos = [
    {nombre: "Laptop", precio: 1200},
    {nombre: "Mouse", precio: 25},
    {nombre: "Teclado", precio: 50}
];

const totalFactura = productos.reduce(function (acumulador, productoActual) {
    // Mostramos que estamos procesando y cuanto llevamos acumulado

    console.log("Escaneando: " + productoActual.nombre + " (Precio: " + productoActual.precio + ")");

    // Sumamos y devolvemos el nuevo total para la siguiente vuelta

    return acumulador + productoActual.precio;
}, 0);


console.log("Total final: $" + totalFactura);

