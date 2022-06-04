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
// voltear tarjeta mensaje no encotrado
//encriptar con el boton, reset
const notfound = document.getElementById("notfound");
var boton = document.getElementById("boton-encriptar");
boton.onclick = function () {    
    if(document.getElementById("entrada").value.match(/^[a-z ]*$/)) {
        encriptar()
        if(document.getElementById("entrada").value){
            notfound.remove();
                }
    } else {
        alert("No se permiten caracteres especiales");
    }
boton.onclick = document.getElementById("entrada").value =" ";
}

         
  