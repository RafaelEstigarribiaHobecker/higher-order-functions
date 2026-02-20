/*Buscar el Valor Máximo (Comparación)
Aquí el acumulador no "suma", sino que "decide" quién se queda.
Es como un torneo de eliminación.*/

const puntajes = [45, 89, 76, 54, 32, 86];

const puntajeMasAlto = puntajes.reduce(function (ganadorTemporal, puntajeActual) {
    // Comparamos el puntaje que tenemos en la mano contra el mas alto que hemos visto

    if (puntajeActual > ganadorTemporal){
        // S i el actual es mayor, el es el nuevo ganador que pasara a la sgte ronda
        return puntajeActual;
    }else{
        // Si el actual es menor, el anterior sigue siendo el maximo.
        return ganadorTemporal;
    }
},0);

console.log("El record es de:",puntajeMasAlto);
