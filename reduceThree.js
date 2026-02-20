const empleados = [
    { nombre: "Ana", depto: "Ventas" },
    { nombre: "Luis", depto: "IT" },
    { nombre: "Marta", depto: "Ventas" },
    { nombre: "Pedro", depto: "IT" }
];

const organigrama = empleados.reduce(function(carpetasPorDepto, empleadoActual) {
    const nombreDelDepto = empleadoActual.depto;
    const nombreDelEmpleado = empleadoActual.nombre;

    // 1. ¿Ya tenemos una carpeta para este departamento?
    if (carpetasPorDepto[nombreDelDepto] === undefined) {
        // Si no existe, creamos una carpeta nueva (un arreglo vacío)
        carpetasPorDepto[nombreDelDepto] = [];
        console.log("Creando carpeta nueva para el departamento: " + nombreDelDepto);
    }

    // 2. Metemos el nombre del empleado en la carpeta correspondiente
    carpetasPorDepto[nombreDelDepto].push(nombreDelEmpleado);

    console.log("Metiendo a " + nombreDelEmpleado + " en la carpeta de " + nombreDelDepto);
    console.log("Estado actual de las carpetas:", carpetasPorDepto);
    console.log("-------------------------------------------");

    // 3. Devolvemos el objeto con todas las carpetas para el siguiente paso
    return carpetasPorDepto;
}, {}); // Empezamos con un objeto vacío {}

console.log("RESULTADO FINAL DEL ORGANIGRAMA:");
console.dir(organigrama);
