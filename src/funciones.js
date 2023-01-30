function encriptar() {
    var texto = document.getElementById("entrada").value;
    texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.getElementById("salida").value = texto;
}
// voltear tarjeta mensaje no encontrado
//encriptar con el boton, reset
const dialog = document.getElementById("niña-con-lupa");
var btnencriptar = document.getElementById("boton-encriptar");
btnencriptar.onclick = function () {
    if (document.getElementById("entrada").value.match(/^[a-z ]*$/)) {
        encriptar()
        dialog.remove();
    } else {
        alert("No se permiten caracteres especiales");
    }
    btnencriptar.onclick = document.getElementById("entrada").value = " ";
}

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
const imagen = document.getElementById("niña-con-lupa");
var btndesencriptar = document.getElementById("boton-desencriptar");
btndesencriptar.onclick = function () {
    if (document.getElementById("entrada").value.match(/^[a-z ]*$/)) {
        desencriptar()
        if (document.getElementById("entrada").value) {
            imagen.remove();
        }
    } else {
        alert("No se permiten caracteres especiales")
    }
    btndesencriptar.onclick = document.getElementById("entrada").value = " ";
}

function copiar() {
    navigator.clipboard.writeText(
        document.getElementById("salida").value
    );
};
document.querySelector("#boton-copiar").addEventListener("click", copiar);

// mostrar y cerrar popup ->mensaje copiado!
const ventana = document.getElementById("ventana");
const cerrar = document.getElementById("boton-cerrar");

cerrar.addEventListener("click", () => {
    ventana.remove();
});
document.querySelector("#boton-copiar").addEventListener("click", function () {
    if (document.getElementById("salida").value) {
        ventana.show();
    }
});


