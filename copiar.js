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
const copy = document.getElementById("boton-copiar");
copy.onclick = function () {
    if(document.getElementById("salida").value){
ventana.show();
    }
 }
// voltear tarjeta mensaje no encotrado



