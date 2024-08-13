alert("Aviso: Organizacion sin fines de lucro");
// let pais=prompt("Con fines estadisticos nos gustaria que indique su pais de procedencia:");
// console.log("Su pais de procencia es "+pais);

if (!localStorage.getItem('argentinos')) {
    localStorage.setItem('argentinos', 0);
}

if (!localStorage.getItem('inmigrantes')) {
    localStorage.setItem('inmigrantes', 0);
}

function preguntarPais() {
    const pais = prompt("Con fin estadistico: ¿Cuál es tu país de procedencia?");
    console.log("Su pais es "+pais);
    // localStorage.setItem('Pais', pais);

    if (!pais) {        //Como tiene !, si el usuario no ingreso nada seria nulo
    console.log("No se ingresó ningún país.");
    return;
    }

    let argentinos = parseInt(localStorage.getItem('argentinos'));  //Voy a transformar los elementos string del storage en normales
    let inmigrantes = parseInt(localStorage.getItem('inmigrantes'));

    if (pais.toLowerCase() === 'argentina') {
        argentinos += 1;
        localStorage.setItem('argentinos', argentinos);
    } else {
        inmigrantes += 1;
        localStorage.setItem('inmigrantes', inmigrantes);
    }


    console.log(`Esta página fue visitada por ${argentinos} Argentinos y ${inmigrantes} inmigrantes.`);
}

window.onload = function() {
    preguntarPais();
};