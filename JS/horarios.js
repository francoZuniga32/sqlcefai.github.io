function cargar() {

    var valueMateria = document.getElementById("materia").value;
    var valueModulo = document.getElementById("modulo").value;
    var valueDia = document.getElementById("dia").value;
    var valueHora = document.getElementById("hora").value;
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
    var hora = document.createElement('td');
    hora.innerHTML = valueHora;
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
    tr.appendChild(hora);
    tr.appendChild(materia);
    tr.appendChild(aula);
    tr.appendChild(modulo);
    tr.appendChild(cuatrimestre);
    
    //cargamos en el textarea
    var sql = "('"+valueMateria+",'"+valueAula+"','"+valueDia+"','"+valueModulo+"','"+valueHora+"', '"+valueCuatrimestre+"', 'normal'),";
    var cargado = document.getElementById("muestra").value;
    cargado += sql; 
    document.getElementById("muestra").value = cargado;
}