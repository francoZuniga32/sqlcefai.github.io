
function armar(){
    console.log("hola mundo");
    var materia = document.getElementById("materia").value;
    var año = document.getElementById("año").value;
    var cuatrimestre = document.getElementById("cuatrimestre").value;

    var insertado = "(NULL,'"+materia+"',"+año+","+cuatrimestre+"),";
    var cargado = document.getElementById("muestra").value;
    cargado += insertado; 
    document.getElementById("muestra").value = cargado;
}

function descargar(){
    var valor = document.getElementById("muestra").value
    console.log(valor.slice(,valor.length()));
}