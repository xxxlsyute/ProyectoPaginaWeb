let proximosTalleres = `[
    {
        "id": 1,
        "nombre": "Taller de Orientación Laboral para Migrantes",
        "fecha": "2024-08-15",
        "ubicacion": "Centro Comunitario XYZ",
        "descripcion": "Taller práctico para ayudar a los migrantes a mejorar sus habilidades para encontrar y mantener empleo."
    },
    {
        "id": 2,
        "nombre": "Concierto Benéfico",
        "fecha": "2024-09-20",
        "ubicacion": "Teatro Municipal ABC",
        "descripcion": "Concierto para recaudar fondos para apoyar programas educativos para niños refugiados."
    },
      // Otros eventos...
]`
    let objetoDeTalleres = JSON.parse(proximosTalleres);
function agregarTallerPorPrompt() {
    let nombre = prompt("Ingrese el nombre del taller:");
    let fecha = prompt("Ingrese la fecha en que se dictara el taller:");
    let ubicacion = prompt("Ingrese la ubicacion en que se dictara el taller:");
    let descripcion = prompt("Ingrese la descripcion del taller:");

    let id = objetoDeTalleres.length + 1;

    objetoDeTalleres.push({ id: id, nombre: nombre, fecha: fecha, ubicacion: ubicacion, descripcion: descripcion });
    console.log("Taller agregado exitosamente:");
    console.log(`ID: ${id}, Nombre: ${nombre}, Fecha: ${fecha}, Ubicacion: ${ubicacion}, Descripcion: ${descripcion}`);

    proximosTalleres = JSON.stringify(objetoDeTalleres);
    guardarTalleresEnLocalStorage();

    mostrarTalleresEnConsola();
}

function mostrarTalleresEnConsola() {
    console.log("Lista de Talleres:");
    for (let i = 0; i < objetoDeTalleres.length; i++) {
        console.log("ID: " + objetoDeTalleres[i].id + ", Nombre: " + objetoDeTalleres[i].nombre + ", Fecha: " + objetoDeTalleres[i].fecha + ", Ubicacion: "+ objetoDeTalleres[i].ubicacion + ", Descripcion: "+ objetoDeTalleres[i].descripcion);
    }
}

function guardarTalleresEnLocalStorage() {
    localStorage.setItem('talleres', proximosTalleres);
}

function cargarTalleresDesdeLocalStorage() {
    let talleresGuardados = localStorage.getItem('talleres');
    if (talleresGuardados) {
        return JSON.parse(talleresGuardados);
    } else {
        return JSON.parse(proximosTalleres);
    }
}

let talleres = cargarTalleresDesdeLocalStorage();
mostrarTalleresEnConsola();

agregarTallerPorPrompt();