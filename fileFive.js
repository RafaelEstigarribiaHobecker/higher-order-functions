/*
    Desafío 2: Formateo de Usuarios Premium (map)
    Tienes una lista de usuarios con su nombre y un valor booleano que indica si son "VIP".
    Queremos transformar esa lista en una lista de frases listas para mostrar en una interfaz,
    saludando de forma especial a los VIP.

*/

let users = [
    {name: "Ana Escobar", esVip: true},
    {name: "Jose Vergara", esVip: true},
    {name: "Alberto Mora", esVip: false},
    {name: "Jesus Korl", esVip: true}

];

function crearMensaje(usuario) {
    if (usuario.esVip) {
        return "Bienvenido honorable " + usuario.name + "! Gracias por su suscripcion.";
    } else {
        return "Hola " + usuario.name + ", Te gustaria ser VIP hoy?";
    }
}

let mensajesDeBienvenida = users.map(crearMensaje);

console.table(mensajesDeBienvenida);
