
function armar(){
    console.log("hola mundo");
    var materia = $("#materia").val();
    var año = $("#año").val();
    var cuatrimestre = $("#cuatrimestre").val();

    var insertado = "(NULL,'"+materia+"',"+año+","+cuatrimestre+"),";
    var cargado = $("#muestra").val();
    cargado += insertado; 
    $("#muestra").val(cargado);
}

function armarCarrera(){
    var carrera = $("#carrera").val();
    var año = $("#plan").val();
    var duracion = $("#duracion").val();

    var insertado = "(NULL,'"+carrera+"',"+año+","+duracion+"),";
    var cargado = $("#muestra").val();
    cargado += insertado; 
    $("#muestra").val(cargado);
}

function descargar(){
    var valor = document.getElementById("muestra").value
    console.log(valor.slice(valor.length()));
}