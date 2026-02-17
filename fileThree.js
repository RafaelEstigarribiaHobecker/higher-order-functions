/*
    Problema 2: El Conversor de Precios (map)
    Imagina que tienes una tienda. Tienes los precios en una lista, pero ahora necesitas:

    Sumarles el IVA (10%).

    Que el resultado se vea como un texto de moneda (ejemplo: "$110").

*/

let preciosBase = [100, 200, 300, 400];

// Creamos la función de transformación clásica
function aplicarIVA(precio) {
    let conIVA = precio * 1.10; // Sumamos el 10%
    return "$" + conIVA.toFixed(2); // Lo convertimos a texto con 2 decimales y el signo $
}

// Usamos MAP para crear la nueva lista
let preciosEtiquetados = preciosBase.map(aplicarIVA);

console.log("Precios originales:", preciosBase);
console.log("Precios listos para la góndola:", preciosEtiquetados);