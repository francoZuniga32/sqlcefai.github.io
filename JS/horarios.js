function cargar() {
    var valueMateria = document.getElementById("materia").value;
    var valueTipo = document.getElementById("tipo").value;
    var valueDia = document.getElementById("dia").value;
    var valueHora = document.getElementById("hora").value;

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
    //cargamos el tipo
    var tipo = document.createElement('td');
    tipo.innerHTML = valueTipo;
    //cargamos todo
    tr.appendChild(dia);
    tr.appendChild(hora);
    tr.appendChild(materia);
    tr.appendChild(tipo);

    //cargamos en el textarea
    var sql = "('"+valueMateria+",'"+valueDia+"','"+valueTipo+"','"+valueHora+"'),";
    var cargado = document.getElementById("horariosMuestra").value;
    cargado += sql; 
    document.getElementById("horariosMuestra").value = cargado;
}