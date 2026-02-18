/*
    El Desafío Final: "Campaña de Liquidación"
    Imagina que tienes una tienda de tecnología. Quieres generar etiquetas de oferta,
    pero solo para los productos que tienen un descuento aplicado.

*/

let productos = [
    {nombre: "Desodorante", precio: 1300, tieneDescuento: true},
    {nombre: "Shampoo de 375 mL", precio: 22000, tieneDescuento: false},
    {nombre: "Detergentende de 1 L", precio: 7500, tieneDescuento: false},
    {nombre: "1 kg de Banana", precio: 1000, tieneDescuento: true},
    {nombre: "1 kg de Cebolla", precio: 1500, tieneDescuento: false},
    {nombre: "Jugo de Naranja de 1 L", precio: 3000, tieneDescuento: false},
    {nombre: "Queso Rallado 40 G", precio: 7400, tieneDescuento: true}

];

function encontrarDescuento(producto) {
    return producto.tieneDescuento && producto.precio > 0;
}

let etiquetasOfertas = productos.filter(encontrarDescuento).map(crearMensaje);

function crearMensaje(producto) {
    return "Oferta!!!" + producto.nombre + " a solo $ " + producto.precio;
}


console.table(etiquetasOfertas);

