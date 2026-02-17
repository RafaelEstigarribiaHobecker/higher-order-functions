/*
    Problema 1: El Guardia de Seguridad (filter)
    El concepto: Tienes una lista grande y quieres una lista más pequeña solo con los elementos
    que pasen una prueba.
    El reto: Tienes una lista de calificaciones de un examen. Queremos crear una nueva lista solo
    con las notas aprobadas (60 o más)

*/

let calificaciones = [45, 90, 60, 30, 85, 100, 20];

// 1. Creamos la regla clasica

function estaAprobado(nota) {
    return nota >= 60;
}

// 2. Usamos el filter que ya viene dentro de Js
// Se lee asi: "A la lista calificaciones, filtrala usando la regla estaAprobado"

let notasAprobadas = calificaciones.filter(estaAprobado);

console.log("Todas las notas");
console.table(calificaciones);

console.log("Solo las aprobadas");
console.table(notasAprobadas);

