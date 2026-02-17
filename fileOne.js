function repetir(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repetir(3, console.log);

/*
    No tenemos que pasar una funcion predefinida a repetir. A menudo, es mas
    facil crear un valor de funcion en el momento
*/

let etiquetas = [];
repetir(5, i => {
    etiquetas.push(`Unidad ${i + 1}`);
});

console.log(etiquetas);


/*  Las funciones de orden superior nos permiten abstraer sobre accionens,
    no solo sobre valores. Por ejemplo, podemos tener funciones que crean nuevas
    funciones:

*/

function mayorQue(n) {
    return m => m > n;
}

let mayorQue10 = mayorQue(10);
console.log(mayorQue10(9));


/*
    Incluso podemos escribir funciones que proveen
    nuevos tipos de flujo de contorl
*/

function aMenosQue(prueba, entonces) {
    if (!prueba) entonces();
}

repetir(3, n => {
    aMenosQue(n % 2 === 1, () => {
        console.log(n, "es par");
    });
});


/*
    Existe un metodo incorporado de arrays, forEach, que proporciona
    algo similar a un bucle for/of como una funcion de orden superior:

*/

["A", "B"].forEach(l => console.log(l));

let array = [1, 2, 3, 4, 5];

array.forEach(l => console.log(l));