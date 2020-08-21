function cargar() {

    var valueMateria = document.getElementById("materia").value;
    var valueModulo = document.getElementById("modulo").value;
    var valueDia = document.getElementById("dia").value;
    var valueHoraInicio = document.getElementById("hora").value;
    var valueHoraFin = document.getElementById("horafinal").value;
    var valueAula = document.getElementById("aula").value;
    var valueCuatrimestre = document.getElementById("cuatrimestre").value;

    var tabla = document.getElementById("horarios");

    //cargamos los horarios en la tabla
    var tr = document.createElement('tr');
    tabla.appendChild(tr);
    //creamos dia y cargamos
    var dia = document.createElement('td');
    dia.innerHTML = valueDia;
    //creamos hora y cargamos
    var horaInicio = document.createElement('td');
    horaInicio.innerHTML = valueHoraInicio;
    //creamos hora y cargamos
    var horaFin = document.createElement('td');
    horaFin.innerHTML = valueHoraFin;
    //creamos materia y le agregamos el nombre
    var materia = document.createElement('td');
    materia.innerHTML = valueMateria;
    //cargamos el aula
    var aula = document.createElement('td');
    aula.innerHTML = valueAula;
    //cargamos el modulo
    var modulo = document.createElement('td');
    modulo.innerHTML = valueModulo;
    //cargamos el cuatrimestre
    var cuatrimestre = document.createElement('td');
    modulo.innerHTML = valueCuatrimestre;


    //cargamos todo
    tr.appendChild(dia);
    tr.appendChild(horaInicio);
    tr.appendChild(horaFin);
    tr.appendChild(materia);
    tr.appendChild(aula);
    tr.appendChild(modulo);
    tr.appendChild(cuatrimestre);
    
    console.log(valueCuatrimestre);
    //cargamos en el textarea
    var sql = `('${valueMateria}','${valueAula}','${valueDia}','${valueModulo}','${valueHoraInicio}', '${valueHoraFin}', '${valueCuatrimestre}', 'normal'),`;
    var cargado = document.getElementById("muestra").value;
    cargado += sql; 
    document.getElementById("muestra").value = cargado;
}