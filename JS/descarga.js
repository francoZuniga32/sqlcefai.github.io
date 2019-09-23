window.onload = function() {
    // ontengo el contenido del textarea
    var txt = document.getElementById('muestra');


    // se genera y descarga el archivo
    document.getElementById('link').onclick = function(code) {
    this.href = 'data:text/plain;charset=utf-8,'
    + encodeURIComponent(txt.value);
    };
};