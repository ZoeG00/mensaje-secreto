
function desencriptar() {
    var texto = document.querySelector("#entrada").value;
    texto = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.getElementById("salida").value = texto;
}
const imagen = document.getElementById("notfound");
var btndesencriptar = document.getElementById("boton-desencriptar");
btndesencriptar.onclick = function () {
    if(document.getElementById("entrada").value.match(/^[a-z ]*$/)) {
        desencriptar()
        if(document.getElementById("entrada").value){
            imagen.remove();}
    } else {
        alert("No se permiten caracteres especiales")
    }
btndesencriptar.onclick = document.getElementById("entrada").value =" ";
}

