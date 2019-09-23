function cargar() {
    var valueMateria = document.getElementById("materia").value;
    var valueModulo = document.getElementById("modulo").value;
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
    //cargamos el modulo
    var modulo = document.createElement('td');
    modulo.innerHTML = valueModulo;
    //cargamos todo
    tr.appendChild(dia);
    tr.appendChild(hora);
    tr.appendChild(materia);
    tr.appendChild(modulo);

    //cargamos en el textarea
    var sql = "('"+valueMateria+",'"+valueDia+"','"+valueModulo+"','"+valueHora+"'),";
    var cargado = document.getElementById("muestra").value;
    cargado += sql; 
    document.getElementById("muestra").value = cargado;
}