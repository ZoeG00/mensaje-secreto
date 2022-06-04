
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

var boton = document.getElementById("boton-desencriptar");
boton.onclick = function () {
    if(document.getElementById("entrada").value.match(/^[a-z ]*$/)) {
        desencriptar();
    } else {
        alert("No se permiten caracteres especiales")
    }
boton.onclick = document.getElementById("entrada").value =" ";
};
