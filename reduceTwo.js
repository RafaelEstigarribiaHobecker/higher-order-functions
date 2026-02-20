const libros = ["Terror", "Ficcion", "Terror", "Historia"];

const resultadoFinal = libros.reduce(function (bolsaDeConteo, generoQueTengoEnLaMano) {
    // 1.Miramos dentro de nuestra "bolsa" si ya existe un papelito con ese genero
    const yaExisteEseGeneroEnLaBolsa = bolsaDeConteo[generoQueTengoEnLaMano];

    if (yaExisteEseGeneroEnLaBolsa !== undefined) {
        // Si ya existe, le sumamos 1 al numero que ya teniamos guardado
        const cantidadVieja = bolsaDeConteo[generoQueTengoEnLaMano];

        const cantidadNueva = cantidadVieja + 1;
        bolsaDeConteo[generoQueTengoEnLaMano] = cantidadNueva;

        console.log("Ya conocia el genero " + generoQueTengoEnLaMano + "! Ahora hay " + cantidadNueva);

    } else {
        // Si no existe (es la primera vez que lo vemos), lo anotamos con el numero 1
        bolsaDeConteo[generoQueTengoEnLaMano] = 1;

        console.log("Es la primera vez que veo " + generoQueTengoEnLaMano + ". Lo anoto con 1.");
    }

    // 2. Mostramos como esta quedando la bolsa despues de este paso
    console.log("Estado de la bolsa ahora mismo:", bolsaDeConteo);
    console.log("------------------------------------------------");

    // 3. Muy Importante! Devolvemos la bolsa para que el siguiente paso la reciba

    return bolsaDeConteo;


}, {});

console.log("Conteo Finalizado:", resultadoFinal);
