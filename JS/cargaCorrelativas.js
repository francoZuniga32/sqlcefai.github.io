function seleccionAño(){
    var carrera = document.getElementById("carrera").value;
    console.log(carrera);
    switch (carrera) {
        //en caso de ser un profesorado
        case "1":
            cargaAños(añoProfesorado, 'año');
            cargaAños(añoProfesorado, 'año2');
        break;
        //en caso de ser lic. Cien
        case "2":
            cargaAños(añoLicenciatura, 'año');
            cargaAños(añoLicenciatura, 'año2');
        break;
        //en caso de ser Lic. Sis
        case "3":
            cargaAños(añoLicenciatura, 'año');
            cargaAños(añoLicenciatura, 'año2');
        break;
        //en caso de ser TUDW
        case "4":
            cargaAños(añoTecnicatura, 'año');
            cargaAños(añoTecnicatura, 'año2');
        break;
        //en caso de ser TUASySL
        case "5":
            cargaAños(añoTecnicatura, 'año');
            cargaAños(añoTecnicatura, 'año2');
        break;
        //en caso de ser cualquier otra cosa
        default:
            borrar("año");
            borrar("materia");
    break;
    }
}
//esta funcion nos muestra las materias de cada carrera
function seleccionMateria(){
    var años = document.getElementById("año").value;
    var carrera = document.getElementById("carrera").value;
    //
    switch(carrera){
        case "1":
            materiasProfesorado(años, "materia");
        break;
        case "2":
            materiasLicenciaturaCiencias(años,"materia");
        break;
        case "3":
            materiasLicenciaturaSistemas(años, "materia")
        break;
        case "4":
            materiasTUDW(años,"materia");
        break;
        case "5":
            materiasTUASySL(años, "materia");
        break;
        default:
            borrar("materia");
        break;
    }
}

function seleccionMateria2(){
    var años = document.getElementById("año2").value;
    var carrera = document.getElementById("carrera").value;
    console.log(años);
    //
    switch(carrera){
        case "1":
            materiasProfesorado(años, "materia2");
        break;
        case "2":
            materiasLicenciaturaCiencias(años,"materia2");
        break;
        case "3":
            materiasLicenciaturaSistemas(años, "materia2")
        break;
        case "4":
            materiasTUDW(años, "materia2");
        break;
        case "5":
            materiasTUASySL(años, "materia2");
        break;
        default:
            borrar("materia2");
        break;
    }
}

function mostrarEnviar(){
    document.getElementById("send").setAttribute("style","visibility: visible;");
}

function armar() {
    var materia1 = document.getElementById("materia").value;
    var materia2 = document.getElementById("materia2").value;
    var correlativa = "('"+materia2+"','"+materia1+"'),";
    var armado = document.getElementById("muestra").value;
    armado += correlativa; 
    document.getElementById("muestra").value = armado;
}

function materiasTUASySL(años, input){
    switch (años) {
        case "1":
            cargarMaterias(materiasTUASySL1,input);
        break;
        case "2":
            cargarMaterias(materiasTUASySL2,input);
        break;
        case "3":
            cargarMaterias(materiasTUASySL3,input);
        break;
        default:
            borrar(input);
        break;
    }
}

function materiasTUDW(años, input) {
    switch (años) {
        case "1":
            cargarMaterias(materiasTUDW1,input);
        break;
        case "2":
            cargarMaterias(materiasTUDW2,input);
        break;
        case "3":
            cargarMaterias(materiasTUDW3,input);
        break;
        default:
            borrar(input);
        break;
    }
}

function materiasLicenciaturaSistemas(años, input){
    switch (años) {
        case "1":
            cargarMaterias(materiasAnalista1,input);
        break;
        case "2":
            cargarMaterias(materiasAnalista2,input);
        break;
        case "3":
            cargarMaterias(materiasAnalista3,input);
        break;
        case "4":
            cargarMaterias(materiasLicSis4,input);
        break;
        case "5":
            cargarMaterias(materiasLicSis5, input);
        break;
        default:
            borrar(input);
        break;
    }
}

function materiasLicenciaturaCiencias(años, input) {
    switch (años) {
        case "1":
            cargarMaterias(materiasAnalista1,input);
        break;
        case "2":
            cargarMaterias(materiasAnalista2,input);
        break;
        case "3":
            cargarMaterias(materiasAnalista3,input);
        break;
        case "4":
            cargarMaterias(materiasLicCien4,input);
        break;
        case "5":
            cargarMaterias(materiasLicCien5, input);
        break;
        default:
            borrar(input);
        break;
    }
}

function materiasProfesorado(años, input) {
    switch (años) {
        case "1":
            cargarMaterias(materiasProf1,input);
        break;
        case "2":
            cargarMaterias(materiasProf2,input);
        break;
        case "3":
            cargarMaterias(materiasProf3,input);
        break;
        case "4":
            cargarMaterias(materiasProf4,input);
        break;
        default:
            borrar(input);
        break;
    }
}

function cargaAños(arreglo, input){
    var select = document.getElementById(input);
    borrar(input);

    for (var i = 0; i < arreglo.length; i++){
        var opt = document.createElement('option');
        opt.value = arreglo[i];
        opt.innerHTML = arreglo[i];
        select.appendChild(opt);
    }
}

function cargarMaterias(arreglo, input) {
    var select = document.getElementById(input);
    borrar(input);

    for (var i = 0; i < arreglo.length; i++){
        var opt = document.createElement('option');
        opt.value = arreglo[i][1];
        opt.innerHTML = arreglo[i][0];
        select.appendChild(opt);
    }
}

function borrar(id){
    document.getElementById(id).options.length = 0;
}
