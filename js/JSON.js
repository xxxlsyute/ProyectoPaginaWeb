let proximosTalleres = [
    {
        id: 1,
        nombre: "Taller de Orientación Laboral para Migrantes",
        fecha: "2024-08-15",
        ubicacion: "Centro Comunitario XYZ",
        descripcion: "Taller práctico para ayudar a los migrantes a mejorar sus habilidades para encontrar y mantener empleo."
    },
    {
        id: 2,
        nombre: "Concierto Benéfico",
        fecha: "2024-09-20",
        ubicacion: "Teatro Municipal ABC",
        descripcion: "Concierto para recaudar fondos para apoyar programas educativos para niños refugiados."
    },
      // Otros eventos...
]
function agregarTallerPorPrompt() {        //Despues cambiar el promp por eventos
    let nombre = prompt("Ingrese el nombre del taller:");
    let fecha = prompt("Ingrese la fecha en que se dictara el taller:");
    let ubicacion = prompt("Ingrese la ubicacion en que se dictara el taller:");
    let descripcion = prompt("Ingrese la descripcion del taller:");

    let id = proximosTalleres.length + 1;

    proximosTalleres.push({ id: id, nombre: nombre, fecha: fecha, ubicacion: ubicacion, descripcion: descripcion });
    console.log("Taller agregado exitosamente:");
    console.log(`ID: ${id}, Nombre: ${nombre}, Fecha: ${fecha}, Ubicacion: ${ubicacion}, Descripcion: ${descripcion}`);

    guardarTalleresEnLocalStorage();

    mostrarTalleresEnConsola();
}

function mostrarTalleresEnConsola() {
    console.log("Lista de Talleres:");

    for (let i = 0; i < proximosTalleres.length; i++) {
        console.log("ID: " + proximosTalleres[i].id + ", Nombre: " + proximosTalleres[i].nombre + ", Fecha: " + proximosTalleres[i].fecha + ", Ubicacion: "+ proximosTalleres[i].ubicacion + ", Descripcion: "+ proximosTalleres[i].descripcion);
    }
}

function guardarTalleresEnLocalStorage() {
    localStorage.setItem('talleres', JSON.stringify(proximosTalleres));
}

function cargarTalleresDesdeLocalStorage() {
    let talleresGuardados = localStorage.getItem('talleres');
    if (talleresGuardados) {
        return JSON.parse(talleresGuardados);
    } else {
        return proximosTalleres;
    }
}

let talleres = cargarTalleresDesdeLocalStorage();
mostrarTalleresEnConsola();

agregarTallerPorPrompt();