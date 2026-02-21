/*Tienes una lista de productos de una tienda.
 Queremos saber cuánto dinero sumarían los productos de la categoría
 "Electrónica" si les aplicáramos un 10% de descuento (porque están en promoción).*/

const inventario = [
    {nombre: "Laptop", categoria: "Electrónica", precio: 1000},
    {nombre: "Silla", categoria: "Muebles", precio: 150},
    {nombre: "Mouse", categoria: "Electrónica", precio: 50},
    {nombre: "Escritorio", categoria: "Muebles", precio: 300},
    {nombre: "Teclado", categoria: "Electrónica", precio: 80}
];

function electronica(producto) {
    return producto.categoria === "Electrónica";

}

function descuentoAgregado(producto) {
    return producto.precio * 0.9;
}

const productosElectronica = inventario.filter(electronica).map(descuentoAgregado);

const sumaFinal = productosElectronica.reduce(function (acumulador, productoActual) {
    return acumulador + productoActual;
}, 0);

console.log("Suma total de productos de la categoria solicitada:", sumaFinal);

