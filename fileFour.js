/*
    Desafío 1: El Filtro de "Stock Crítico" (filter)
    Imagina que tienes una lista de objetos, donde cada objeto es un producto con un nombre y una cantidad en bodega.
    Queremos obtener una lista que solo contenga los productos que necesitan reposición urgente.

*/

let inventario = [
    {nombre: "Teclado Mecanico", stock: 15},
    {nombre: "Mouse Gamer", stock: 3},
    {nombre: "Monitor 24'", stock: -10},
    {nombre: "Cable HDMI", stock: 2}
];

function faltante(producto) {

    if (producto.stock < 0) {
        console.error("Cuidado.El producto " + producto.nombre + " tiene stock negativo.");
        return false;
    }
    return producto.stock < 5;
}


let productosAgotados = inventario.filter(faltante);

console.log("Inventario");
console.table(inventario);

console.log("Los productos a reponer son:");
console.table(productosAgotados);
