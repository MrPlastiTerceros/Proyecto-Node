let autores = [{
    id: 1,
    nombre: 'Ana'
}, {
    id: 2,
    nombre: 'Jezabel'
}, {
    id: 3,
    nombre: 'Ariana'
}]

function agregarBotones() {
    var divBotones = document.getElementById("divBotones");

    for (var i = 0; i < autores.length; i++) {
        var texto = document.createTextNode(autores[i].nombre);
        var botones = document.createElement("button");
        botones.appendChild(texto);
        divBotones.appendChild(botones);
    }
}

agregarBotones()